// Controller file to handle all workout request logic

const express = require('express')
const mongoose = require('mongoose')

// require workout model
const Workout = require('../models/Workout')

// get all workouts
const getWorkouts = async(req, res) =>  {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

// get single workout
const getWorkout = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout.'})
    }

    const workout = await Workout.findById(id)

    if (!workout){
        return res.status(404).json({error:'No such workout.'})
    }

    return res.status(200).json(workout)
}

// create a workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    try {
        // use workout model to create a new workout
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

// delete a workout
const deleteWorkout = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout.'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout){
        return res.status(400).json({error: 'No such workout.'})
    }

    res.status(200).json(workout)
}

// update a workout
const updateWorkout = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout.'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout){
        return res.status(400).json({error: 'No such workout.'})
    }

    res.status(200).json(workout)
}

module.exports = {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
}