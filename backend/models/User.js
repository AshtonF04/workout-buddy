const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// static sign up method
userSchema.statics.signUp = async function(email, password){

    //validation
    if (!email || !password ){
        throw Error('Must enter all fields.')
    }

    if(!validator.isEmail(email)){
        throw Error('Enter a valid email.')
    }

    // Password must have one lowercase, one lowercase, one number, one special character, and be at least 8 characters long
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough.')
    }

    // find user in database with entered email
    const exists = await this.findOne({ email })

    // if user with email exists throw an error
    if (exists){
        throw Error('Email already in use.')
    }

    // generate a salt for the password
    const salt = await bcrypt.genSalt(10)

    // hash password with salt  
    const hash = await bcrypt.hash(password, salt)

    // create new user in database with email and hashed password
    const user = await this.create({ email, password: hash })

    return user
}

// static login method
userSchema.statics.login = async function (email, password){
    if (!email || !password){
        throw Error('Must enter all fields.')
    }

    const user = await this.findOne({ email })

    if (!user){
        throw Error('Incorrect email.')
    }

    const passwordCorrect = await bcrypt.compare(password, user.password)

    if (!passwordCorrect){
        throw Error('Incorrect password.')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)