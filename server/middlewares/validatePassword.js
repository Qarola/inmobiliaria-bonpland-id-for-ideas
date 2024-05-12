// middleware de validación de formato de contraseña
const validatePassword = (req, res) => {
    const { password } = req.body;
    // Define una expresión regular para validar que la contraseña contenga al menos una minúscula, una mayúscula, un número y un caracter especial, y tenga al menos 8 caracteres en total
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ message: "La contraseña debe contener al menos una minúscula, una mayúscula, un número, un caracter especial y tener al menos 8 caracteres" });
    }
  };
  
  module.exports = {
    validatePassword
  };
  
