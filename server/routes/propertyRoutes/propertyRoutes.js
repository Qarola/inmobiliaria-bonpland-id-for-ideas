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
const { validateToken, createToken } = require("../../auth/Jwt.controller");
const { getProperties, getPropertiesList, changePropertyStatus, searchPropertiesByType, getFeaturedProperties, getPropertyDetails, contactRealEstate,EditProperty,deleteProperty } = require('../../controllers/propertyController/propertyController')



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
property.get("/detail/:id", getPropertyDetails);
property.get("/featured-properties", getFeaturedProperties);
property.get("/all-properties", getPropertiesList);
property.get("/properties/type/:propertyType", searchPropertiesByType);

//POST
property.post("/contact-real-estate", contactRealEstate);

// PUT
property.put('/', validateToken, EditProperty);
property.put('/properties/:id/status', changePropertyStatus);


// DELETE
property.delete('/',deleteProperty);


module.exports = property;
