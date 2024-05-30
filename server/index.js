const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const connectToMongoDB = require('./database/connection.js');
const propertyRoute = require('./routes/propertyRoutes/propertyRoutes.js');
const userRoutes = require('./routes/userRoutes/userRoutes.js');
const contactRoutes = require('./routes/contactForm/contactForm.js')
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const specs = require('./swaggerDocs.js'); 


const app = express();
dotenv.config(); 

// Middlewares
const corsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
};

app.use(cors(corsOptions)); // Configura CORS

app.use(morgan('dev'));
app.use(cookieParser()); // Analiza cookies
app.use(express.json()); // Analiza solicitudes JSON

// Rutas
app.use("/api", propertyRoute); 
app.use("/users", userRoutes);
app.use("/api", contactRoutes);


// Sirve la documentación Swagger en la ruta /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

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

// Ruta de prueba para verificar el estado del servidor remoto
app.get("/health", (req, res) => {
  res.status(200).json({ message: "OK" });
});

// Ruta de prueba del sitio para config MeLi
app.get("/", (req, res) => {
  res.status(200).json({ message: "¡Bienvenido a Inmobiliaria Bonpland!" });
});

const port = process.env.PORT || 5000;

// Inicia servidor y conectar a MongoDB
app.listen(port, () => {
  const mongoURI = process.env.MONGODB_URI;
  if (!mongoURI) {
    console.error("MongoDB URI is not defined.");
    process.exit(1);
  }
  connectToMongoDB(mongoURI);
  console.log(`Server running on port ${port}`);
});
