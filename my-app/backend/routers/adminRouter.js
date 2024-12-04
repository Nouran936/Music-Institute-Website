const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

const User = require('../models/userModel');

router.post('/add', adminController.addAdmin);
router.post('/login', adminController.loginAdmin);

module.exports = router;
