const swaggerJsDoc = require('swagger-jsdoc');
const path = require("path");

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Inmobiliaria Bonpland - Id For Ideas',
      version: '1.0.0',
      description: 'Documentación de la API de Inmobiliaria Bonpland',
    },
    servers: [
        {
          url: "https://inmobiliaria-bonpland-id-for-ideas.onrender.com",  //"http://localhost:5000",
        },
      ],
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
          },
        },
      },
  },
  apis: [path.join(__dirname, 'swaggerDocs.js')], // Rutas donde se encuentran las anotaciones Swagger
};

const specs = swaggerJsDoc(options);

module.exports = specs;

/**
 * @swagger
 * components:
 *   schemas:
 *     Property:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID único de la propiedad.
 *         titlePost:
 *           type: string
 *           description: Título de la propiedad.
 *         propertyType:
 *           type: string
 *           description: Tipo de propiedad.
 *         rooms:
 *           type: integer
 *           description: Número de habitaciones.
 *           minimum: 0
 *         bathrooms:
 *           type: integer
 *           description: Número de baños.
 *           minimum: 0
 *         country:
 *           type: string
 *           description: País donde se encuentra la propiedad.
 *         city:
 *           type: string
 *           description: Ciudad donde se encuentra la propiedad.
 *         state:
 *           type: string
 *           description: Estado o provincia donde se encuentra la propiedad.
 *         coveredArea:
 *           type: number
 *           description: Área cubierta de la propiedad en metros cuadrados.
 *           minimum: 0
 *         price:
 *           type: number
 *           description: Precio de la propiedad.
 *           minimum: 0
 *         status:
 *           type: string
 *           enum: ["disponible", "reservado", "rentado", "vendido"]
 *           description: Estado actual de la propiedad.
 *         contractType:
 *           type: string
 *           enum: ["rent", "sale"]
 *           description: Tipo de contrato de la propiedad.
 *         reference:
 *           type: string
 *           description: Referencia única de la propiedad.
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: Lista de URLs de las imágenes de la propiedad.
 *         address:
 *           type: string
 *           description: Dirección de la propiedad.
 *         featuredProperties:
 *           type: string
 *           description: Propiedades destacadas.
 *         sellerContact:
 *           type: object
 *           properties:
 *             contact:
 *               type: string
 *               description: Nombre del contacto del vendedor.
 *             other_info:
 *               type: string
 *               description: Otra información de contacto del vendedor.
 *             webpage:
 *               type: string
 *               description: Página web del vendedor.
 *             area_code:
 *               type: string
 *               description: Código de área del teléfono del vendedor.
 *             phone:
 *               type: string
 *               description: Número de teléfono principal del vendedor.
 *             area_code2:
 *               type: string
 *               description: Código de área secundario del teléfono del vendedor.
 *             phone2:
 *               type: string
 *               description: Número de teléfono secundario del vendedor.
 *             email:
 *               type: string
 *               description: Correo electrónico del vendedor.
 *       required:
 *         - titlePost
 *         - propertyType
 *         - rooms
 *         - country
 *         - city
 *         - state
 *         - coveredArea
 *         - price
 *         - status
 *         - contractType
 *         - reference
 *         - address
 *         - featuredProperties
 *         - sellerContact
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID único del usuario.
 *         name:
 *           type: string
 *           description: Nombre del usuario.
 *         email:
 *           type: string
 *           description: Correo electrónico del usuario.
 *         password:
 *           type: string
 *           description: Contraseña del usuario.
 *         role:
 *           type: string
 *           enum: ["admin", "user"]
 *           description: Rol del usuario.
 *       required:
 *         - name
 *         - email
 *         - password
 *         - role
 */

/* *
 * @swagger
 * /api/properties:
 *   get:
 *     summary: Obtiene propiedades de la API de MercadoLibre y las guarda en la base de datos.
 *     tags: [Property]
 *     description: Obtiene propiedades de la API de MercadoLibre y las guarda en la base de datos.Requiere renovación de token.
 *     responses:
 *       '200':
 *         description: Petición exitosa. Las propiedades se han guardado correctamente.
 *       '500':
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /api/featured-properties:
 *   get:
 *     summary: Obtiene las propiedades destacadas.
 *     tags: [Property]
 *     description: Obtiene las propiedades destacadas.
 *     responses:
 *       '200':
 *         description: Petición exitosa. Devuelve las propiedades destacadas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Property'
 *       '500':
 *         description: Error interno del servidor.
 */


/**
 * @swagger
 * /api/detail/{id}:
 *   get:
 *     summary: Obtiene los detalles de una propiedad por su ID.
 *     tags: [Property]
 *     description: Obtiene los detalles de una propiedad por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la propiedad
 *     responses:
 *       '200':
 *         description: Petición exitosa. Devuelve los detalles de la propiedad.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Property'
 *       '404':
 *         description: Propiedad no encontrada.
 *       '500':
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /api/all-properties:
 *   get:
 *     summary: Obtiene una lista de todas las propiedades.
 *     tags: [Property]
 *     description: Obtiene una lista de todas las propiedades.
 *     responses:
 *       '200':
 *         description: Petición exitosa. Devuelve la lista de todas las propiedades.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Property'
 *       '500':
 *         description: Error interno del servidor.
 */


/**
 * @swagger
 * /api/properties/type/{propertyType}:
 *   get:
 *     summary: Busca propiedades por tipo.
 *     tags: [Property]
 *     description: Busca propiedades por tipo. Ej.:casa, departamento.
 *     parameters:
 *       - in: path
 *         name: propertyType
 *         schema:
 *           type: string
 *         required: true
 *         description: Tipo de propiedad
 *     responses:
 *       '200':
 *         description: Petición exitosa. Devuelve las propiedades del tipo especificado.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Property'
 *       '404':
 *         description: No se encontraron propiedades del tipo especificado.
 *       '500':
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /api/properties/search:
 *   get:
 *     summary: Busca propiedades por filtros.
 *     tags: [Property]
 *     description: Busca propiedades utilizando varios filtros como precio y tamaño.
 *     parameters:
 *       - in: query
 *         name: priceGreater
 *         schema:
 *           type: number
 *         description: Precio mayor
 *       - in: query
 *         name: priceMinor
 *         schema:
 *           type: number
 *         description: Precio menor
 *       - in: query
 *         name: metersGreater
 *         schema:
 *           type: number
 *         description: Metros cuadrados mayores
 *       - in: query
 *         name: metersMinor
 *         schema:
 *           type: number
 *         description: Metros cuadrados menores
 *     responses:
 *       '200':
 *         description: Petición exitosa. Devuelve las propiedades que cumplen con los filtros especificados.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Property'
 *       '500':
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /api/properties/create:
 *   post:
 *     summary: Crea un nuevo inmueble.
 *     tags: [Property]
 *     description: Crea un nuevo inmueble utilizando los datos proporcionados en el cuerpo de la solicitud.
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               titlePost:
 *                 type: string
 *                 description: Título del inmueble.
 *               propertyType:
 *                 type: string
 *                 description: Tipo de propiedad.
 *               rooms:
 *                 type: integer
 *                 description: Número de habitaciones.
 *               bathrooms:
 *                 type: integer
 *                 description: Número de baños.
 *               country:
 *                 type: string
 *                 description: País donde se encuentra el inmueble.
 *               city:
 *                 type: string
 *                 description: Ciudad donde se encuentra el inmueble.
 *               state:
 *                 type: string
 *                 description: Estado o provincia donde se encuentra el inmueble.
 *               coveredArea:
 *                 type: number
 *                 description: Área cubierta del inmueble en metros cuadrados.
 *               price:
 *                 type: number
 *                 description: Precio del inmueble.
 *               status:
 *                 type: string
 *                 enum: [disponible, reservado, rentado, vendido]
 *                 description: Estado actual del inmueble.
 *               contractType:
 *                 type: string
 *                 enum: [rent, sale]
 *                 description: Tipo de contrato del inmueble.
 *               reference:
 *                 type: string
 *                 description: Referencia única del inmueble.
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Lista de imágenes del inmueble.
 *               address:
 *                 type: string
 *                 description: Dirección del inmueble.
 *               featuredProperties:
 *                 type: string
 *                 description: Propiedades destacadas.
 *               sellerContact:
 *                 type: object
 *                 properties:
 *                   contact:
 *                     type: string
 *                     description: Nombre del contacto del vendedor.
 *                   other_info:
 *                     type: string
 *                     description: Otra información de contacto del vendedor.
 *                   webpage:
 *                     type: string
 *                     description: Página web del vendedor.
 *                   area_code:
 *                     type: string
 *                     description: Código de área del teléfono del vendedor.
 *                   phone:
 *                     type: string
 *                     description: Número de teléfono principal del vendedor.
 *                   area_code2:
 *                     type: string
 *                     description: Código de área secundario del teléfono del vendedor.
 *                   phone2:
 *                     type: string
 *                     description: Número de teléfono secundario del vendedor.
 *                   email:
 *                     type: string
 *                     description: Correo electrónico del vendedor.
 *             required:
 *               - titlePost
 *               - propertyType
 *               - rooms
 *               - country
 *               - city
 *               - state
 *               - coveredArea
 *               - price
 *               - status
 *               - contractType
 *               - reference
 *               - images
 *               - address
 *               - featuredProperties
 *               - sellerContact
 *     responses:
 *       '201':
 *         description: Inmueble creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                 property:
 *                   $ref: '#/components/schemas/Property'
 *       '500':
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /api/contact-real-estate:
 *   post:
 *     summary: Envia un correo electrónico a la inmobiliaria sobre una consulta de propiedad.
 *     tags: [Property]
 *     description: Envia un correo electrónico a la inmobiliaria sobre una consulta de propiedad. En email, coloque el email del responsable del inmueble. Reference, la referencia del inmueble del que está interesado. Message, su mensaje.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               reference:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Petición exitosa. Correo electrónico enviado correctamente.
 *       '500':
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /api/edit/{reference}:
 *   put:
 *     summary: Edita una propiedad existente en la base de datos.
 *     tags: [Property]
 *     description: Edita una propiedad existente en la base de datos.
 *     parameters:
 *       - in: path
 *         name: reference
 *         required: true
 *         description: Número de la referencia de la propiedad que se desea editar.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: false
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               titlePost:
 *                 type: string
 *                 description: Título del inmueble.
 *               propertyType:
 *                 type: string
 *                 description: Tipo de propiedad.
 *               rooms:
 *                 type: integer
 *                 description: Número de habitaciones.
 *               bathrooms:
 *                 type: integer
 *                 description: Número de baños.
 *               country:
 *                 type: string
 *                 description: País donde se encuentra el inmueble.
 *               city:
 *                 type: string
 *                 description: Ciudad donde se encuentra el inmueble.
 *               state:
 *                 type: string
 *                 description: Estado o provincia donde se encuentra el inmueble.
 *               coveredArea:
 *                 type: number
 *                 description: Área cubierta del inmueble en metros cuadrados.
 *               price:
 *                 type: number
 *                 description: Precio del inmueble.
 *               status:
 *                 type: string
 *                 enum: [disponible, reservado, rentado, vendido]
 *                 description: Estado actual del inmueble.
 *               contractType:
 *                 type: string
 *                 enum: [rent, sale]
 *                 description: Tipo de contrato del inmueble.
 *               reference:
 *                 type: string
 *                 description: Referencia única del inmueble.
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Lista de imágenes del inmueble.
 *               address:
 *                 type: string
 *                 description: Dirección del inmueble.
 *               featuredProperties:
 *                 type: string
 *                 description: Propiedades destacadas.
 *               sellerContact:
 *                 type: object
 *                 properties:
 *                   contact:
 *                     type: string
 *                     description: Nombre del contacto del vendedor.
 *                   other_info:
 *                     type: string
 *                     description: Otra información de contacto del vendedor.
 *                   webpage:
 *                     type: string
 *                     description: Página web del vendedor.
 *                   area_code:
 *                     type: string
 *                     description: Código de área del teléfono del vendedor.
 *                   phone:
 *                     type: string
 *                     description: Número de teléfono principal del vendedor.
 *                   area_code2:
 *                     type: string
 *                     description: Código de área secundario del teléfono del vendedor.
 *                   phone2:
 *                     type: string
 *                     description: Número de teléfono secundario del vendedor.
 *                   email:
 *                     type: string
 *                     description: Correo electrónico del vendedor.
 *     responses:
 *       '200':
 *         description: Petición exitosa. Propiedad editada correctamente.
 *       '404':
 *         description: Propiedad no encontrada.
 *       '500':
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /api/status/{reference}:
 *   put:
 *     summary: Cambia el estado de una propiedad.
 *     tags: [Property]
 *     description: Cambia el estado de una propiedad.
 *     parameters:
 *       - in: path
 *         name: reference
 *         schema:
 *           type: string
 *         required: true
 *         description: Número de referencia de la propiedad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [disponible, reservado, rentado, vendido]
 *                 description: Nuevo estado de la propiedad
 *     responses:
 *       '200':
 *         description: Petición exitosa. Estado de la propiedad cambiado correctamente.
 *       '500':
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /api/delete/{reference}:
 *   delete:
 *     summary: Elimina una propiedad de la base de datos.
 *     tags: [Property]
 *     description: Elimina una propiedad de la base de datos.
 *     parameters:
 *       - in: path
 *         name: reference
 *         schema:
 *           type: string
 *         required: true
 *         description: Número de referencia de la propiedad que se desea eliminar.
 *     responses:
 *       '200':
 *         description: Petición exitosa. Propiedad eliminada correctamente.
 *       '404':
 *         description: No se encontró la propiedad a eliminar.
 *       '500':
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registra a un usuario.
 *     tags: [User]
 *     description: Un usuario se registra normalmente.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [user, admin]
 *                 description: Rol del usuario. Este campo es opcional y por defecto es "user".
 *     responses:
 *       '200':
 *         description: Petición exitosa. Usuario registrado correctamente.
 *       '500':
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /users/admin/register:
 *   post:
 *     summary: Registra un nuevo administrador.
 *     tags: [User]
 *     description: Un admin registra a un nuevo admin. Esta ruta requiere autenticación y autorización como administrador.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [admin]
 *                 description: Rol del usuario. Este campo es opcional y solo se usa para registrar administradores.
 *     responses:
 *       '200':
 *         description: Petición exitosa. Administrador registrado correctamente.
 *       '401':
 *         description: No autorizado. El usuario no está autenticado o no tiene permisos de administrador.
 *       '403':
 *         description: Prohibido. El usuario no tiene permiso para acceder a esta ruta.
 *       '500':
 *         description: Error interno del servidor.
 *     security:
 *       - BearerAuth: []
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Inicia sesión para usuarios y administradores.
 *     tags: [User]
 *     description: Inicia sesión para usuarios y administradores.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [admin]
 *                 description: Rol del usuario. Este campo es opcional y solo se usa para iniciar sesión como administrador.
 *     responses:
 *       '200':
 *         description: Petición exitosa. Sesión iniciada correctamente.
 *       '401':
 *         description: Credenciales incorrectas.
 *       '404':
 *         description: Usuario no encontrado.
 *       '500':
 *         description: Error interno del servidor.
 *     security:
 *       - BearerAuth: []
 */



/**
 * @swagger
 * /users/token:
 *   post:
 *     summary: Crea un token de autenticación para probar en Postman.
 *     tags: [User]
 *     description: Crea un token de autenticación para probar en Postman.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [admin]
 *                 description: Rol del usuario. Este campo es opcional y solo se usa para iniciar sesión como administrador.
 *     responses:
 *       '200':
 *         description: Petición exitosa. Token creado correctamente.
 *       '401':
 *         description: Credenciales incorrectas.
 *       '500':
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios.
 *     tags: [User]
 *     description: Endpoint para obtener todos los usuarios almacenados en la base de datos.
 *     responses:
 *       '200':
 *         description: OK. Devuelve la lista de usuarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indica si la solicitud fue exitosa.
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                   description: Lista de usuarios.
 *       '500':
 *         description: Error del servidor. No se pudo obtener la lista de usuarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indica si la solicitud fue exitosa.
 *                 message:
 *                   type: string
 *                   description: Mensaje de error.
 */

/**
 * @swagger
 * /contactForm:
 *   post:
 *     summary: Create a new contact message
 *     tags: [Contact Form]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - message
 *             properties:
 *               email:
 *                 type: string
 *                 description: The contact email
 *               message:
 *                 type: string
 *                 description: The contact message
 *     responses:
 *       201:
 *         description: Contact message received
 *       500:
 *         description: Error creating contact message
 */