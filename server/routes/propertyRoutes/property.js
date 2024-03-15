const express = require('express');
const router = express.Router();
const { getProperties, getPropertyDetails, contactRealEstate } = require('../../controllers/propertyController/propertyController')


//GET
router.get("/properties", getProperties);
router.get("/detail/:id", getPropertyDetails);

//POST
router.post("/contactar-inmobiliaria", contactRealEstate);

module.exports = router;