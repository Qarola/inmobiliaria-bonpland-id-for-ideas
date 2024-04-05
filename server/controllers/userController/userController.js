const User = require("../../models/User/User");
const bcrypt = require("bcrypt");
const { validateToken } = require("../../auth/Jwt.controller");
const dotenv = require("dotenv"); 

// Carga variables de entorno desde el archivo .env
dotenv.config();

// Registro de usuario normal
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

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
      role: 'user', // Asignar el rol de usuario
    });
    await newUser.save();

    return res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

// Registro de administrador desde el panel de administrador
const registerAdminFromDashboard = async (req, res) => {
  try {
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
      role: 'admin', // Asigna el rol de administrador
    });
    await newUser.save();

    return res.status(201).json({ message: "Administrador registrado exitosamente" });
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

// Inicio de sesión de usuario y admin
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Busca al usuario por email
    let user = await User.findOne({ email });
    const adminEmails = process.env.ADMIN_EMAILS.split(',');

    // Si el usuario no está en la base de datos y no es el administrador definido en .env, devuelve un error
    if (!user && !adminEmails.includes(email)) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Si el usuario no está en la base de datos pero es el administrador definido en .env, procede con la autenticación
    if (adminEmails.includes(email)) {
      // Se puede realizar alguna lógica adicional aquí si es necesario para el administrador
      return res.status(200).json({ message: "Inicio de sesión exitoso para el administrador" });
    }

    // Verifica la contraseña para usuarios normales
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Verifica el token
    await validateToken(req, res, next);

    // Si la contraseña es válida y el token es válido, puedes devolver un mensaje de éxito o un token de autenticación
    return res.status(200).json({ message: "Inicio de sesión exitoso" });
  } catch (error) {
    console.error(error); // Imprime el error en la consola para depuración
    return res.status(500).json({ message: "Error en el servidor" });
  }
};



module.exports = {
  registerUser,
  registerAdminFromDashboard,
  login
};
