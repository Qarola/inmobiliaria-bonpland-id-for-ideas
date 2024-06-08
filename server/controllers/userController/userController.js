const User = require("../../models/User/User");
const { validateEmail } = require("../../middlewares/validateEmail");
const { validatePassword } = require("../../middlewares/validatePassword");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validateToken } = require("../../auth/Jwt.controller");
const dotenv = require("dotenv");

const secretKey = process.env.JWT_SECRET;

// Carga variables de entorno desde el archivo .env
dotenv.config();

// Registro de usuario normal
const registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Validar el email y la contraseña
    await validateEmail(req, res);
    await validatePassword(req, res);

    // Verifica si la contraseña y la confirmación de contraseña coinciden
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "La contraseña y la confirmación de contraseña no coinciden",
      });
    }

    // Verificar si el usuario ya existe
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Crear un nuevo usuario con el rol de usuario
    const newUser = new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
      role: "user", // Asigna el rol de usuario
    });
    await newUser.save();

    return res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error("Error al registrar el usuario:", error.message);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

// Registro de administrador desde el panel de administrador
const registerAdminFromDashboard = async (req, res) => {
  try {
    await validateEmail(req, res); // Validar el email
    await validatePassword(req, res); // Validar la contraseña

    const { name, email, password } = req.body;

    // Verificar si el usuario ya existe
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Crear un nuevo usuario con el rol de administrador
    const newUser = new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
      role: "admin", // Asignar el rol de administrador
    });
    await newUser.save();

    // Generar el token JWT para el nuevo usuario
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role }, // Información que se incluye en el token
      secretKey, // Clave secreta para firmar el token
      { expiresIn: "1h" } // Expiración del token
    );

    // Configurar la cookie con HttpOnly y Secure
    res.cookie("authToken", token, {
      httpOnly: true, // La cookie no puede ser accedida por JavaScript del lado del cliente
      secure: process.env.NODE_ENV === "production", // Solo enviar la cookie a través de HTTPS en producción
      maxAge: 3600000, // 1 hora en milisegundos
      sameSite: "strict", // Opcional: mejorar la seguridad contra ataques CSRF
    });

    return res
      .status(201)
      .json({ message: "Administrador registrado exitosamente" });
  } catch (error) {
    console.error("Error al registrar el nuevo administrador:", error);
    return res
      .status(500)
      .json({ message: "Error en el servidor: " + error.message });
  }
};
// Inicio de sesión de usuario y admin
const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Verificar si el usuario intenta iniciar sesión como administrador sin serlo
    if (role === "admin") {
      const user = await User.findOne({ email, role: "admin" });

      if (!user) {
        console.log("No puedes iniciar sesión como administrador");
        return res.status(403).json({
          message: "No tienes permisos para iniciar sesión como administrador",
        });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        console.log("Credenciales inválidas");
        return res.status(401).json({ message: "Credenciales inválidas" });
      }

      console.log("Inicio de sesión de administrador");
      const token = jwt.sign({ email, role: "admin" }, secretKey, {
        expiresIn: "1h",
      });

      return res.status(200).json({
        message: "Inicio de sesión exitoso para el administrador",
        token,
        role: "admin",
      });
    }

    // Verificar la contraseña para usuarios normales
    const user = await User.findOne({ email });

    if (!user) {
      console.log("Usuario no encontrado");
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      console.log("Credenciales inválidas");
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const token = jwt.sign({ id: user._id, role }, secretKey, {
      expiresIn: "1h",
    });

    return res
      .status(200)
      .json({ message: "Inicio de sesión exitoso", token, role });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

// Función para verificar si un usuario tiene permisos de administrador
const isAdmin = (email) => {
  const adminEmails = process.env.ADMIN_EMAILS.split(",");
  return adminEmails.includes(email);
};

const getAllUsers = async (req, res) => {
  try {
    const getAllUsersDB = await User.find();
    res.status(200).json({
      success: true,
      data: getAllUsersDB,
    });
  } catch (error) {
    console.error("Error al obtener todos los usuarios.", error);
    res.status(500).json({
      success: false,
      message: "Error al obtener todos los usuarios.",
    });
  }
};

module.exports = {
  registerUser,
  registerAdminFromDashboard,
  login,
  getAllUsers,
};
