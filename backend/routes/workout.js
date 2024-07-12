const express = require('express')

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({msg: 'get all workouts'})
})

// GET single workout
router.get('/:id', (req, res) => {
    res.json({msg: 'get single workout'})
})

// POST new workout
router.post('/create', (req, res) => {
    res.json({msg: 'create new workout'})
})

// DELETE workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'delete a workout'})
})

// UPDATE workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'update a workout'})
})


module.exports = router