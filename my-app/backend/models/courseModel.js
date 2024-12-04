const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: String,
  category: String,
  level: String,
  duration: String,
  price: Number,
  image: String,
  instructor: [{
    name: String,
    bio: String,
    image: String
  }],
  syllabus: [String],
  schedule: [String],
  reviews: [
    {
      studentName: String,
      rating: Number,
      comment: String,
    },
  ],
  enrolledUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Course', courseSchema);
