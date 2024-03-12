const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config('../'); 

// Función para conectar a MongoDB
const connectToMongoDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  };
   
  // Manejar desconexión de MongoDB al detener o reiniciar el servidor
  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
  });
  process.on("SIGINT", async () => {
    try {
      await mongoose.connection.close();
      console.log("Disconnected from MongoDB");
      process.exit(0);
    } catch (error) {
      console.error("Error disconnecting from MongoDB", error);
      process.exit(1);
    }
  });

  module.exports = connectToMongoDB;

