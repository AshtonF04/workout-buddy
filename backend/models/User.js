const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

module.exports = mongoose.model('User', userSchema)