const express = require('express');
const router = express.Router();
const {getProperties} = require('../../controllers/propertyController/propertyController')


//GET
router.get("/properties", getProperties);

module.exports = router;