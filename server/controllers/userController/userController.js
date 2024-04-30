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
    validateEmail(req, res, () => {
      validatePassword(req, res, async () => {
        const { name, email, password, /* confirmPassword */ } = req.body;

        // Verifica si la contraseña y la confirmación de contraseña coinciden
      /*   if (password !== confirmPassword) {
          return res.status(400).json({ message: "La contraseña y la confirmación de contraseña no coinciden" });
        } */

        // Verifica si el usuario ya existe
        let existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "El usuario ya existe" });
        }

        // Crea un nuevo usuario con el rol de usuario
        const newUser = new User({
          name,
          email,
          password: await bcrypt.hash(password, 10),
          role: "user", // Asigna el rol de usuario
        });
        await newUser.save();

        return res
          .status(201)
          .json({ message: "Usuario registrado exitosamente" });
      });
    });
  } catch (error) {
    console.error("Error al registrar el usuario:", error.message);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

// Registro de administrador desde el panel de administrador
const registerAdminFromDashboard = async (req, res) => {
  try {
    validateEmail(req, res, () => {
      validatePassword(req, res, async () => {
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
          role: "admin", // Asigna el rol de administrador
        });
        await newUser.save();

        return res
          .status(201)
          .json({ message: "Administrador registrado exitosamente" });
      });
    });
  } catch (error) {
    console.error("Error al registrar el nuevo administrador:", error.message);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

// Inicio de sesión de usuario y admin
const login = async (req, res) => {
  try {
        const { email, password, role } = req.body;

        // Verificar si el usuario intenta iniciar sesión como administrador sin serlo
        if (role === "admin" && !isAdmin(email)) {
          console.log("No puedes iniciar sesión como administrador"); // Registro de depuración
          return res.status(403).json({
            message:
              "No tienes permisos para iniciar sesión como administrador",
          });
        }

        // Verificar si el correo electrónico es de un administrador
        const adminEmails = process.env.ADMIN_EMAILS.split(",");
        if (adminEmails.includes(email) && role === "admin") {
          console.log("Inicio de sesión de administrador"); // Registro de depuración

          // Generar un token JWT para el administrador con el rol 'admin'
          const token = jwt.sign({ email, role: "admin" }, secretKey, {
            expiresIn: "1h",
          });

          // Devolver el token JWT como respuesta al inicio de sesión exitoso del administrador
          return res.status(200).json({
            message: "Inicio de sesión exitoso para el administrador",
            token,
            role: "admin",
          });
        }

        // Si el correo electrónico no es de un administrador, buscar al usuario por correo electrónico
        let user = await User.findOne({ email });

        // Si el usuario no está en la base de datos, devolver un error
        if (!user) {
          console.log("Usuario no encontrado"); // Registro de depuración
          return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Verificar la contraseña para usuarios normales
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
          console.log("Credenciales inválidas"); // Registro de depuración
          return res.status(401).json({ message: "Credenciales inválidas" });
        }

        // Si la contraseña es válida, generar un token JWT con el rol del usuario
        const token = jwt.sign({ id: user._id, role }, secretKey, {
          expiresIn: "1h",
        });

        // Si la contraseña es válida y el token es válido, devolver un mensaje de éxito, el token y el rol del usuario
        return res
          .status(200)
          .json({ message: "Inicio de sesión exitoso", token, role });
          
  } catch (error) {
    console.error(error); // Registro de errores en la consola para depuración
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
