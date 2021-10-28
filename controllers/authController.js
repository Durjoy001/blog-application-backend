const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync')
const { MongoDbAuthDao } = require('./../dao/mongoDbAuthDao');
const { AuthService } = require('./../services/authService');
const authDao = new MongoDbAuthDao();
const authService = new AuthService(authDao);

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

exports.signup = async(req,res,next) => {
    try{
        //const newUser = await User.create(req.body);
        
        const newUser = await authService.signup(req,next);
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
    const user = await authService.login(req,next);

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
    const currentUser = await authService.protect(decoded.id);
    if(!currentUser){
        return next(new AppError('The user belonging to this token does no longer exist.',401));
    }  
    req.user = currentUser;
    next();
})
