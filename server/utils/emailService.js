const Property = require("../models/Property/Property");
const mail_iBonpland = require("../utils/accountTransport");

// Función para enviar el correo electrónico
const sendAEmail = async (correoDestino, asunto, mensaje, reference) => {
  try {
    // Recupera detalles del inmueble basados en el código de referencia
    const propertyDetails = await Property.findOne({ reference });

    // Verifica si se encontraron detalles del inmueble
    if (!propertyDetails) {
      throw new Error(
        "No se encontró ningún inmueble con el código de referencia proporcionado"
      );
    }

    // Configura el correo electrónico
    const mailOptions = {
      from: "Inmobiliaria Bonpland <" + process.env.AUTH_EMAIL + ">",
      to: correoDestino,
      subject: asunto,
      html: `
          <p>Hola,</p>
          <p>Estoy interesado(a) en obtener más información sobre la siguiente propiedad:</p>
          <p><strong>Título:</strong> ${propertyDetails.titlePost}</p>
          <p><strong>Referencia:</strong> ${propertyDetails.reference}</p>
          <p><strong>Tipo de propiedad:</strong> ${propertyDetails.propertyType}</p>
          <p><strong>Imagen de la propiedad:</strong> ${propertyDetails.images}</p>
          <p><strong>Descripción:</strong> ${mensaje}</p>
        `,
    };

    // Envia el correo electrónico utilizando la configuración de transporte de correo electrónico
    mail_iBonpland((transport) => {
      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error al enviar el correo electrónico:", error);
          throw error;
        }
        console.log("Correo electrónico enviado:", info.messageId);
      });
    });
    
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    throw error;
  }
};

module.exports = sendAEmail;
