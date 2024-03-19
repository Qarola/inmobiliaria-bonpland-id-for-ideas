const express = require('express');
const property = express.Router();
const { getProperties, getPropertiesList, searchPropertiesByType, getFeaturedProperties, getPropertyDetails, contactRealEstate,EditProperty,deleteProperty } = require('../../controllers/propertyController/propertyController')


//GET
property.get("/properties", getProperties);
property.get("/detail/:id", getPropertyDetails);
property.get("/featured-properties", getFeaturedProperties);
property.get("/all-properties", getPropertiesList);
property.get("/properties/type/:propertyType", searchPropertiesByType);



//POST
property.post("/contact-real-estate", contactRealEstate);

// PUT
property.put('/', EditProperty);

// DELETE
property.delete('/',deleteProperty);


module.exports = property;