const express = require('express');
const property = express.Router();
const { getProperties, 
    createProperty,
    getPropertiesList, 
    changePropertyStatus, 
    searchPropertiesByType, 
    getFeaturedProperties, 
    getPropertyDetails, 
    contactRealEstate,
    EditProperty,
    deleteProperty,
    showPropertiesByFilters,
 } = require('../../controllers/propertyController/propertyController')


//GET
property.get("/properties", getProperties);
property.get("/featured-properties", getFeaturedProperties);
property.get("/detail/:id", getPropertyDetails);
property.get("/all-properties", getPropertiesList);
property.get("/properties/type/:propertyType", searchPropertiesByType);
property.get("/properties/search", showPropertiesByFilters);

//POST
property.post("/properies/create", createProperty);
property.post("/contact-real-estate", contactRealEstate);

// PUT
property.put('/', EditProperty);
property.put('/properties/:id/status', changePropertyStatus);


// DELETE
property.delete('/',deleteProperty);


module.exports = property;