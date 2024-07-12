// require dotenv module to access environment variables
require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workout')

// create express ap
const app = express()

app.use(express.json())

// log request details to console
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port ', process.env.PORT)
})

