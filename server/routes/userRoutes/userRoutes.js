const express = require('express');
const router = express.Router();
const { registerUser, registerAdminFromDashboard, login, getAllUsers } = require('../../controllers/userController/userController');
const { validateToken, requireRole, createToken, validateCookieToken } = require('../../auth/Jwt.controller');

//Ruta para traer todos los usuarios de la DB.
router.get('/', getAllUsers);

// Ruta para el registro de usuarios normales
router.post('/register',  registerUser);


// Ruta para el registro de usuarios normales
router.post('/register', registerUser);

// Ruta para el registro de nuevos administradores desde el panel de administrador
router.post('/admin/register', validateCookieToken, requireRole('admin'), registerAdminFromDashboard);

// Ruta para el inicio de sesión
router.post('/login', login);

// Ruta para crear el token y testear en Postman
router.post('/token', createToken);

// Ruta para crear el token y testear en Postman
router.get('/token', createToken);

module.exports = router;
