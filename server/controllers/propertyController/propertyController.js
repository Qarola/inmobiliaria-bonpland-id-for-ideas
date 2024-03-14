require("dotenv").config();
const axios = require("axios");
const uuid = require("uuid");
const { meliConfig } = require("../../config");
const Property = require("../../models/Property/Property");

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const reference = uuid.v4();

const getProperties = () => {
  return axios
    .get(
      `${meliConfig.root_url}/sites/MLA/search?item_location=lat:-37.987148_-30.987148,lon:-57.5483864_-50.5483864&category=MLA1459&limit=10`,
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
            /* images: inmueble.pictures && inmueble.pictures.length > 0 ? inmueble.pictures.map(picture => picture.url) : [], */ // Verifica si inmueble.pictures está definido y no está vacío antes de llamar a map()
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



module.exports = {
  getProperties,
  
};
