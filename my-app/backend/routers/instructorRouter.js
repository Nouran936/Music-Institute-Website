const express = require('express');
const router = express.Router();
const { getInstructors, addInstructor, deleteInstructor } = require('../controllers/instructorController');

router.get('/', getInstructors);
router.post('/', addInstructor);
router.delete('/:id', deleteInstructor);

module.exports = router;
