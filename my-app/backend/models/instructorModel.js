const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
  name: {type: String, required: true},
  bio: {type: String},
  email: {type: String, required: true, unique: true},
  courses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Course'}],
});

module.exports = mongoose.model('Instructor', instructorSchema);
