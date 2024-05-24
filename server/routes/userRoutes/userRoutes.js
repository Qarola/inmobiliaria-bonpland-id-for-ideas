const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { registerUser, registerAdminFromDashboard, login, getAllUsers } = require('../../controllers/userController/userController');
const { validateToken, requireRole, createToken } = require('../../auth/Jwt.controller');

//Ruta para traer todos los usuarios de la DB.
router.get('/', getAllUsers);

// Ruta para el registro de usuarios normales
router.post('/register',  registerUser);
=======
const { registerUser, registerAdminFromDashboard, login } = require('../../controllers/userController/userController');
const { validateToken, requireRole, createToken } = require('../../auth/Jwt.controller');

// Ruta para el registro de usuarios normales
router.post('/register', registerUser);
>>>>>>> Develop

// Ruta para el registro de nuevos administradores desde el panel de administrador
router.post('/admin/register', validateToken, requireRole('admin'), registerAdminFromDashboard);

// Ruta para el inicio de sesión
router.post('/login', login);

<<<<<<< HEAD
// Ruta para crear el token y testear en Postman
router.post('/token', createToken);
=======

// Ruta para crear el token y testear en Postman
router.get('/token', createToken);
>>>>>>> Develop

module.exports = router;
