const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

require("dotenv").config();

const mail_iBonpland = async (callback) => {
  try {
    const oauth2Client = new OAuth2(
      process.env.AUTH_CLIENT_ID,
      process.env.AUTH_CLIENT_SECRET,
      process.env.AUTH_OAUTH_PLAYGROUND
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.AUTH_REFRESH_TOKEN,
    });

    // Se utiliza una promesa para encapsular la llamada a oauth2Client.getAccessToken
    const accessToken = await new Promise((resolve, reject) => {
      // oauth2Client.getAccessToken maneja la renovación automática del token de acceso cuando sea necesario
      oauth2Client.getAccessToken((err, token) => {
        if (err) reject(err);
        // Si se obtiene con éxito un nuevo token de acceso, se llama a resolve con el token de acceso como argumento.
        resolve(token);
      });
    });

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.AUTH_EMAIL,
        clientId: process.env.AUTH_CLIENT_ID,
        clientSecret: process.env.AUTH_CLIENT_SECRET,
        refreshToken: process.env.AUTH_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    callback(transport);
  } catch (error) {
    console.error(
      "Error al configurar el transporte del correo electrónico:",
      error
    );
    throw error;
  }
};

module.exports = mail_iBonpland;
