const express = require('express');
const router = express.Router();
const { handleContactForm, getAllMessages, getMessageById}  = require('../controllers/contactController');

router.post('/contact', handleContactForm);
router.get('/admin/dashboard/view-messages/:id', getMessageById);
router.get('/admin/dashboard/view-messages', getAllMessages);
module.exports = router;


