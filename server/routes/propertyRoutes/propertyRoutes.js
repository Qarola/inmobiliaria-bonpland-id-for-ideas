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
    editProperty,
    deleteProperty,
    showPropertiesByFilters,
 } = require('../../controllers/propertyController/propertyController')
const { propertyUpload } = require("../../utils/multer");


//GET
property.get("/properties", getProperties);
property.get("/featured-properties", getFeaturedProperties);
property.get("/detail/:id", getPropertyDetails);
property.get("/all-properties", getPropertiesList);
property.get("/properties/type/:propertyType", searchPropertiesByType);
property.get("/properties/search", showPropertiesByFilters);

//POST
property.post("/properties/create", propertyUpload.array('images'), createProperty);
property.post("/contact-real-estate", contactRealEstate);

// PUT
property.put('/edit/:reference', propertyUpload.array('images'), editProperty);
property.put('/status/:reference', changePropertyStatus);


// DELETE
property.delete('/delete/:reference', deleteProperty);


module.exports = property;