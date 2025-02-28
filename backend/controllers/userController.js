require('dotenv').config()

const User = require('../models/User')
const jwt = require('jsonwebtoken')

// function to create a token
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body 
    try {
        const user = await User.login(email, password)

        // create token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        emptyFields = []

        if (email == ""){
            emptyFields.push("email")
        }
        if (password == ""){
            emptyFields.push("password")
        }

        res.status(400).json({ msg: error.message, emptyFields })
    }
}

// signup user
const signupUser = async (req, res) => {
    const { email, password} = req.body
    try {
        const user = await User.signUp(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        emptyFields = []

        if (email == ""){
            emptyFields.push("email")
        }
        if (password == ""){
            emptyFields.push("password")
        }

        res.status(400).json({ msg: error.message, emptyFields })
    }
}

module.exports = {loginUser, signupUser}