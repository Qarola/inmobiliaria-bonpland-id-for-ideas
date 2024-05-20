const express = require('express');
const { createContact } = require('../../controllers/contactFormController/createContactController');
const router = express.Router();

router.post('/contact', createContact);

module.exports = router;
