const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router();
const User = require('../models/userModel');
const auth = require('../middleware/auth');



router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.post('/', courseController.createCourse);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);


router.post('/enroll', auth, courseController.enrollInCourse);
// router.post('/enroll', auth, async (req, res) => {
//   const { courseId } = req.body;
//   const userId = req.user._id;

//   try {

//     const course = await Course.findById(courseId);
//     const user = await User.findById(userId);

//     if (!course || !user) {
//       return res.status(404).json({ message: 'Course or user not found' });
//     }


//     if (user.enrolledCourses.includes(courseId)) {
//       return res.status(400).json({ message: 'Already enrolled in this course' });
//     }

//     user.enrolledCourses.push(courseId);
//     await user.save();

//     course.enrolledUsers.push(userId);
//     await course.save();

//     res.status(200).json({ message: 'Successfully enrolled in the course' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error enrolling in course', error });
//   }
// });

module.exports = router;
