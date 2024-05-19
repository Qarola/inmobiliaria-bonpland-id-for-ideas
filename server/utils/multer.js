const multer = require('multer');
const path = require('path');

// Configuración de almacenamiento de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directorio donde se almacenarán las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Nombre de archivo único
  }
});

// Filtro de archivos para permitir solo imágenes
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Las imágenes deben estar en formato JPEG, JPG o PNG');
  }
};

// Configuración de multer 
const propertyUpload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2, // 2 MB (tamaño en bytes)
    files: 3 // Número máximo de archivos que se pueden cargar simultáneamente
  },
  fileFilter: fileFilter
});

module.exports = {
  propertyUpload,
};
