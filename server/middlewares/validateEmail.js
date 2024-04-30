// middleware de validación de patrón de email
const validateEmail = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Formato de correo electrónico inválido" });
    }
    next();
  };
  
  module.exports = {
    validateEmail
  };
  