const ContactForm = require('../../models/ContactForm/ContactForm');
const { sendContactMessage } = require('../../utils/emailService');

exports.createContact = async (req, res) => {
  try {
    const { email, message } = req.body;
    const contact = new ContactForm({ email, message });
    await contact.save();

    // Enviar el correo electrónico utilizando sendContactMessage
    await sendContactMessage(email, message);

    res.status(201).json({ message: 'Contact message received and email sent', contact });
  } catch (error) {
    res.status(500).json({ message: 'Error creating contact message', error });
  }
};
