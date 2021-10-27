const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'please provide your name'],
    },
    email: {
        type: String,
        required: [true,'Please provide your email!!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail,'Please provide a valid email!!']
    },
    password: {
        type: String,
        required: [true,'Please provide a password'],
        minlength: 8,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function(el){
                return el === this.password;
            },
            message: 'password ar not same!!!'
        }
    }
});

userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    //encrypt the password before store it to db
    this.password = await bcrypt.hash(this.password,8);

    this.passwordConfirm = undefined;
    next();
});

userSchema.methods.correctPassword = async function(candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword,userPassword);
}

const User = mongoose.model('User',userSchema);

module.exports = User;