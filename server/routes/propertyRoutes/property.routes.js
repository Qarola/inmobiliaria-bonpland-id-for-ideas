const express = require('express');
const property = express.Router();
const { getProperties, getPropertyDetails, contactRealEstate,EditProperty,deleteProperty } = require('../../controllers/propertyController/propertyController')


//GET
property.get("/properties", getProperties);
property.get("/detail/:id", getPropertyDetails);

//POST
property.post("/contactar-inmobiliaria", contactRealEstate);

// PUT
property.put('/',EditProperty);

// DELETE
property.delete('/',deleteProperty);


module.exports = property;