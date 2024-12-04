const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const userController = require('../controllers/userController');

const router = express.Router();


router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ name, email, password });
    await user.save();

    const token = user.generateAuthToken();
    res.status(201).json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !user.comparePassword(password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = user.generateAuthToken();
    res.status(200).json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});



// router.get('/', userController.getAllUsers);

// router.put('/:userId', userController.updateUser);

// router.delete('/:userId', userController.deleteUser);

module.exports = router;
