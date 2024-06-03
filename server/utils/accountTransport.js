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

    // Obtener el token de acceso utilizando la promesa
    const { token } = await oauth2Client.getAccessToken();
      // oauth2Client.getAccessToken maneja la renovación automática del token de acceso cuando sea necesario
      if (!token) {
        throw new Error("No se pudo obtener un token de acceso");
      }

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.AUTH_EMAIL,
        clientId: process.env.AUTH_CLIENT_ID,
        clientSecret: process.env.AUTH_CLIENT_SECRET,
        refreshToken: process.env.AUTH_REFRESH_TOKEN,
        accessToken: token,
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
