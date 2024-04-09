const multer = require('multer');
const path = require('path');


// Configuración de multer para el almacenamiento de archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Directorio donde se almacenarán las imágenes de perfil de usuario.
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Nombre de archivo único
    }
  });

// Configuración de multer para subir archivos
const propertyUpload = multer({
    storage: storage,
    limits: {
    fileSize: 1024 * 1024 * 2, // 2 MB (tamaño en bytes)
    files: 3 // Número máximo de archivos que se pueden cargar simultáneamente
  }
}); // 'images' es el nombre del campo de entrada del formulario donde se cargan las imágenes

module.exports = {
    storage,
    propertyUpload, 
}