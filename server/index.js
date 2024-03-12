const dotenv = require("dotenv");
const express = require("express");
const connectToMongoDB = require('./database/connection.js')
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
dotenv.config(); 

// Middlewares
const corsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
};

app.use(cors(corsOptions)); // Configurar CORS
app.use(morgan('dev'));
app.use(cookieParser()); // Analizar cookies
app.use(express.json()); // Analizar solicitudes JSON

//Ruta de prueba para verificar el estado del servidor remoto
app.get("/health", (req, res) => {
  res.status(200).json({ message: "OK" });
});

// Ruta para la raíz del sitio
app.get("/", (req, res) => {
  res.status(200).json({ message: "¡Bienvenido a Inmobiliaria Bonpland!" });
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const port = process.env.PORT || 5000;

// Iniciar servidor y conectar a MongoDB
app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server running on port ${port}`);
});
