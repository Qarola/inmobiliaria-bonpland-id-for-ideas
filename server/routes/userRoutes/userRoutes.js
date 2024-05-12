const express = require('express');
const router = express.Router();
const { registerUser, registerAdminFromDashboard, login, getAllUsers } = require('../../controllers/userController/userController');
const { validateToken, requireRole, createToken } = require('../../auth/Jwt.controller');
const { validateEmail } = require('../../middlewares/validateEmail');
const { validatePassword } = require('../../middlewares/validatePassword');

//Ruta para traer todos los usuarios de la DB.
router.get('/', getAllUsers);

// Ruta para el registro de usuarios normales
router.post('/register', validateEmail, validatePassword, registerUser);

// Ruta para el registro de nuevos administradores desde el panel de administrador
router.post('/admin/register', validateToken, requireRole('admin'), registerAdminFromDashboard);

// Ruta para el inicio de sesión
router.post('/login', login);

// Ruta para crear el token y testear en Postman
router.post('/token', createToken);

module.exports = router;
