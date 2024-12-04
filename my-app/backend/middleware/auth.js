const jwt = require('jsonwebtoken');
const User = require('../models/userModel')

const auth = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // req.user = decoded;
    const user = await User.findById(decoded._id); // Match the user from decoded token

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;
    req.userId = user._id;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = auth;
