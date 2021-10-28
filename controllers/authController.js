const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync')

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

exports.signup = async(req,res) => {
    try{
        const newUser = await User.create(req.body);

        const token = signToken(newUser._id);

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

exports.login = catchAsync(async(req,res,next) => {
    const {email,password} = req.body;
    
    //Check if email and password exist
    if(!email || !password) {
        return next(new AppError('Please provide email and password!!',400));
    }
    //check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');

    if(!user || !await user.correctPassword(password,user.password)){
        return next(new AppError('Incorrect email or password', 401));
    }

    //if everything ok, send token to client
    const token = signToken(user._id);
    res.status(200).json({
        status: 'sucess',
        token
    });
});

exports.protect = catchAsync(async (req,res,next) => {
     
    //Getting token and check if it's there
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }
    if(!token){
        return next(new AppError('You are not logged in! Please log in to get access.',401));
    }
    //verification of token
    const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET);
    //check if user still exists
    const currentUser = await User.findById(decoded.id);
    if(!currentUser){
        return next(new AppError('The user belonging to this token does no longer exist.',401));
    }  
    req.user = currentUser;
    next();
})

/*exports.restrictTo = (...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.role)){
            return next(new AppError('You do not have permission to perform this action.',403));
        }
        next();
    }
}*/

/*exports.restrictTo =() => {
    return (req,res,next) => {
        if(req.body.creator != req.user.name){
            return next(new AppError('You do not have permission to perform this action!!',403));
        }
        next();
    }
}*/
