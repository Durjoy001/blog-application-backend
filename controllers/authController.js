const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');


exports.signup = async(req,res) => {
    try{
        const newUser = await User.create(req.body);

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        res.status(201).json({
            status: 'sucess',
            token,
            data: {
                user: newUser 
            }
        });
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};