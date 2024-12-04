const mongoose = require('mongoose')
const connectDB = async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/MusicAcademyDB');
    console.log('Database connection established');
}

module.exports=connectDB;
