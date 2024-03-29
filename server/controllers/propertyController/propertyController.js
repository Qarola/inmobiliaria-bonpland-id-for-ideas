require("dotenv").config();
const axios = require("axios");
const uuid = require("uuid");
const { meliConfig } = require("../../meliConfig/config");
const Property = require("../../models/Property/Property");
const sendAEmail = require("../../utils/emailService");

 
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const reference = uuid.v4();

// Get data from API MeLi and save DB.
const getProperties = () => {
  return axios
    .get(
      `${meliConfig.root_url}/sites/MLA/search?item_location=lat:-37.987148_-30.987148,lon:-57.5483864_-50.5483864&category=MLA1459&limit=20`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    )
    .then(async (response) => {
      const inmuebles = response.data.results;

      const promises = inmuebles.map(async (inmueble) => {
        try {
          // Genera un nuevo reference único para cada documento
          const reference = uuid.v4();

          const operation = inmueble.attributes.find(
            (attr) => attr.id === "OPERATION"
          )?.value_name; //?. Este operador se utiliza para acceder a las propiedades de un objeto de manera segura cuando no se está seguro de si el objeto (o alguna de sus propiedades) es nulo o indefinido.

          let contractType;

          switch (operation) {
            case "Venta":
              contractType = "sale";
              break;
            case "Alquiler temporal":
              contractType = "rent_temporary";
              break;
            case "Alquiler":
              contractType = "rent";
              break;
            default:
              contractType = "default_contract_type";
              break;
          }

          const propertyData = {
            titlePost: inmueble.title,
            propertyType:
              inmueble.attributes.find((attr) => attr.id === "PROPERTY_TYPE")
                ?.value_name || "default_value",
            rooms:
              parseInt(
                inmueble.attributes.find((attr) => attr.id === "ROOMS")
                  ?.value_name
              ) || 0,
              bathrooms:
              inmueble.attributes.find((attr) => attr.id === "FULL_BATHROOMS")
                ?.value_name || 0,
            country: inmueble.location.country.name || "default_value",
            city: inmueble.location.city.name || "default_value",
            state: inmueble.location.state.name || "default_value",
            coveredArea:
              parseInt(
                inmueble.attributes.find((attr) => attr.id === "COVERED_AREA")
                  ?.value_struct?.number
              ) || 0,
            price: parseInt(inmueble.price) || 0,
            contractType: contractType,
            reference: reference, // Utiliza el reference único generado
            images: [inmueble.thumbnail],
            address: inmueble.location.address_line || "default_value",
            featuredProperties: inmueble.listing_type_id,
            sellerContact: inmueble.seller_contact,
            otherInfo: inmueble.other_info,
          };

          const newProperty = new Property(propertyData);
          await newProperty.save();
          console.log("Propiedad guardada exitosamente:", newProperty);
        } catch (error) {
          console.error("Error al guardar la propiedad:", error.message);
        }
      });
      //Promise.all para esperar a que todas las promesas de guardado se completen antes de devolver una respuesta.
      await Promise.all(promises);
      return Promise.all(promises);
    })
    .catch((error) => {
      console.error("Error al obtener datos de la API:", error.message);
      throw error;
    });
};

//Get Featured Properties from DB
const getFeaturedProperties = async (req, res) => {
  try {
    // Busca las propiedades disponibles ordenadas por precio ascendente y por número de habitaciones descendente
    const featuredProperties = await Property.find({
      status: "disponible", // Filtra por propiedades disponibles
    })
      .sort({ price: 1, rooms: -1 }) // Ordena por precio ascendente y por número de habitaciones descendente
      .limit(10); // Limita el número de resultados a 10

    res.status(200).json({
      success: true,
      data: featuredProperties,
    });
  } catch (error) {
    console.error("Error al obtener propiedades destacadas:", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener propiedades destacadas.",
    });
  }
};

//GET Property List
const getPropertiesList = async (req, res) => {
  try {
    const getAllPropertiesDB = await Property.find();

    res.status(200).json({
      success: true,
      data: getAllPropertiesDB,
    });
  } catch (error) {
    console.error("Error al obtener todas las propiedades.", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener todas la propidedades.",
    });
  }
};

// Property detail by id
const getPropertyDetails = async (req, res, next) => {
  try {
    const reference = req.params.id;
    const property = await Property.findById(reference); // Busca la propiedad por su referencia

    if (!property) {
      return res.status(404).json({ message: "Propiedad no encontrada" });
    }
    res.status(200).json(property);
  } catch (error) {
    next(error);
  }
};

// Edit property in the database
async function EditProperty(req, res) {
  try {
    const referenceToPut = req.body.reference;
    const result = await Property.findOneAndUpdate(
      { reference: referenceToPut },
      req.body,
      { new: true } // Esto es para devolver el documento actualizado
    );
    return res.send(result);
  } catch (error) {
    console.error("Error al editar la propiedad:", error);
    return res
      .status(500)
      .json({ status: 500, message: "Error al editar la propiedad." });
  }
}

// Delete property in the database
async function deleteProperty(req, res) {
  try {
    const referenceToDelete = req.body.reference;
    const result = await Property.deleteOne({ reference: referenceToDelete });
    //deletedCount es una propiedad que proviene del resultado de la operación deleteOne() en Mongoose,
    //y nos indica cuántos documentos fueron eliminados de la base de datos.
    if (result.deletedCount === 0) {
      // Si no se encontró ninguna propiedad para eliminar
      return res
        .status(404)
        .json({ status: 404, message: "Propiedad no encontrada." });
    }

    return res
      .status(200)
      .json({ status: 200, message: "Propiedad eliminada exitosamente." });
  } catch (error) {
    console.error("Error al eliminar la propiedad:", error);
    return res
      .status(500)
      .json({ status: 500, message: "Error al eliminar la propiedad." });
  }
}

// POST to Real Estate contact
const contactRealEstate = async (req, res) => {
  try {
    const { reference, message, email } = req.body;

    // Verifica si se proporcionó un correo electrónico de destino
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Correo electrónico de destino no proporcionado",
      });
    }
    // Envia el correo electrónico utilizando la función sendAEmail
    await sendAEmail(
      email,
      `Consulta sobre propiedad referencia: ${reference}`,
      message,
      reference
    );
    res.status(200).json({
      success: true,
      message: "Correo enviado a la inmobiliaria correctamente.",
    });
  } catch (error) {
    console.error("Error al contactar a la inmobiliaria:", error);
    res.status(500).json({
      success: false,
      message: "Error al contactar a la inmobiliaria.",
    });
  }
};

// Search by Property type
const searchPropertiesByType = async (req, res) => {
  try {
    let { propertyType } = req.params; // Obtiene el tipo de propiedad desde los parámetros de la URL
    propertyType =
      propertyType.charAt(0).toUpperCase() +
      propertyType.slice(1).toLowerCase(); // Convierte la primera letra a mayúscula y el resto a minúscula

    const properties = await Property.find({ propertyType }); // Busca propiedades por el tipo especificado

    if (properties.length === 0) {
      // Si no se encontraron propiedades del tipo especificado
      return res.status(404).json({
        success: false,
        message: `No se encontraron propiedades del tipo '${propertyType}'.`,
      });
    }
    // Si se encontraron propiedades del tipo especificado, se devuelve en la respuesta
    res.status(200).json({
      success: true,
      data: properties,
    });
  } catch (error) {
    console.error("Error al buscar propiedades por tipo:", error);
    res.status(500).json({
      success: false,
      message: "Error al buscar propiedades por tipo.",
    });
  }
};

//Change property status
const changePropertyStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { newStatus } = req.body;

    // Busca la propiedad por su ID
    const prop = await Property.findById(id);

    // Verifica si la propiedad existe
    if (!prop) {
      return res.status(404).json({ mensaje: 'Propiedad no encontrada' });
    }
    // Actualiza el estado de la propiedad
    prop.status = newStatus;
    await prop.save();

    res.json({ mensaje: 'Estado de la propiedad actualizado correctamente', prop });
  } catch (error) {
    console.error('Error al actualizar el estado de la propiedad:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = {
  getProperties,
  getFeaturedProperties,
  getPropertiesList,
  getPropertyDetails,
  contactRealEstate,
  EditProperty,
  deleteProperty,
  searchPropertiesByType,
  changePropertyStatus
};
