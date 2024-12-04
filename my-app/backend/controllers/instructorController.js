const Instructor = require('../models/instructorModel');

const getInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.json(instructors);
  } catch (err) {
    res.status(500).send('Failed to fetch instructors');
  }
};


const addInstructor = async (req, res) => {
  const { name, bio, email } = req.body;
  try {
    const newInstructor = new Instructor({ name, bio, email });
    await newInstructor.save();
    res.status(201).send('Instructor added successfully');
  } catch (err) {
    res.status(500).send('Failed to add instructor');
  }
};


const deleteInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findByIdAndDelete(req.params.id);
    if (!instructor) return res.status(404).send('Instructor not found');
    res.status(200).send('Instructor deleted successfully');
  } catch (err) {
    res.status(500).send('Failed to delete instructor');
  }
};

module.exports = { getInstructors, addInstructor, deleteInstructor };
