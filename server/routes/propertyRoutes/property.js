const express = require('express');
const router = express.Router();
const {getProperties, getPropertyDetails} = require('../../controllers/propertyController/propertyController')


//GET
router.get("/properties", getProperties);
router.get("/detail/:id", getPropertyDetails);

module.exports = router;