// require the express module
const express = require('express')

const requireAuth = require('../middleware/requireAuth')

// create a new express router to handle workout routes
const router = express.Router()

router.use(requireAuth)

// import the workout controller functions
const {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

// GET all workouts
router.get('/', getWorkouts)

// GET single workout
router.get('/:id', getWorkout)

// POST new workout
router.post('/', createWorkout)

// DELETE workout
router.delete('/:id', deleteWorkout)

// PATCH workout
router.patch('/:id', updateWorkout)


module.exports = router