const Course = require('../models/courseModel');
const User = require('../models/userModel');
const mongoose = require('mongoose');

exports.getAllCourses = async (req, res) => {
  try{
    const courses = await Course.find();
    // const courses = await Course.find().populate('enrolledUsers', 'name email');
    // console.log(courses);
    res.status(200).json(courses);
  }
  catch(err){
    res.status(500).json({message: err.message})
  }
};

exports.getCourseById = async (req, res) => {
  try{
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json(course);
  }
  catch(err){
    res.status(500).json({message: err.message})
  }
}

exports.createCourse = async (req, res) => {
  const {name, description, category, level, price, duration, image, instructor, syllabus, schedule} = req.body;
  const newCourse = new Course({name, description, category, level, price, duration, image,  instructor, syllabus, schedule});

  try{
    await newCourse.save();
    res.status(201).json(newCourse);
  }
  catch(err){
    res.status(400).json({message: err.message});
  }
}

exports.deleteCourse = async(req, res) =>{
  try{
    const course = await Course.findByIdAndDelete(req.params.id);
    if(!course){
      return res.status(404).json({message: 'Course not found'});
    }
    res.status(200).json({message: 'Course deleted successfully'});
  }
  catch(err){
    res.status(500).json({message: 'Failed to delete course'});
  }
}

exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });

    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.enrollInCourse = async (req, res) => {
  try {
    const { courseId } = req.body;
    const userId = req.userId;

    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: 'Invalid course ID' });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.enrolledCourses.includes(courseId)) {
      return res.status(400).json({ message: 'Already enrolled in this course' });
    }

    user.enrolledCourses.push(courseId);
    await user.save();

    course.enrolledUsers.push(userId);
    await course.save();

    res.status(200).json({ message: 'Successfully enrolled in the course' });
  } catch (error) {
    res.status(500).json({ message: 'Error enrolling in course', error });
  }
};
