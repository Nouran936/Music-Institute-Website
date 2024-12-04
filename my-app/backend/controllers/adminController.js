const Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
require('dotenv').config();  


const loginAdmin = async(req, res) =>{
  const {username, password} = req.body;
  // console.log('Received login data:', {username, password});
  try{
    const admin = await Admin.findOne({username});
    if(!admin){
      return res.status(400).send('Admin not found');
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    // console.log('Password match:', isMatch)
    if(!isMatch){
      return res.status(400).send('Invalid credentials');
    }

    const secretKey = process.env.JWT_SECRET_KEY;
    // console.log('JWT_SECRET_KEY:', process.env.JWT_SECRET_KEY);
    const token = jwt.sign({id: admin._id}, secretKey, {expiresIn: '1h'});
    console.log('Generated Token:', token);
    res.json({token})
  }
  catch(err){
    console.error(err);
    res.status(500).send('Server error');
  }
}

const addAdmin = async(req, res)=>{
  const{username, password} = req.body;
  console.log('Received request to add admin:', { username, password });
  try{
    const existingAdmin = await Admin.findOne({username});
    if(existingAdmin){
      return res.status(400).send('Admin already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      username, password: hashedPassword
    });
    await newAdmin.save();
    res.status(201).send('Admin created successfully');
  }
  catch(err){
    console.error(err);
    res.status(500).send('Server error');
  }
}

module.exports = {addAdmin, loginAdmin}
