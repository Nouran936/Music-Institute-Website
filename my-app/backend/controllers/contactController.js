const Contact = require('../models/contactModel');

const handleContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  const newContact = new Contact({
    name,
    email,
    message,
  });

  try {
    await newContact.save();
    res.status(200).json({ message: 'Message stored successfully!' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ message: 'There was an error processing your message. Please try again later.' });
  }
};



const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find();
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getMessageById = async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json(message);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleContactForm, getAllMessages, getMessageById};

