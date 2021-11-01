const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync')
const { MongoDbAuthDao } = require('./../dao/mongoDbAuthDao');
const { AuthService } = require('./../services/authService');

const authDao = new MongoDbAuthDao();
const authService = new AuthService(authDao);

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

exports.isLogin = catchAsync(async(req,res,next) => {
    console.log('dfdg');
    let loginToken;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        loginToken = req.headers.authorization.split(' ')[1];
    }
    if(loginToken){
        //verification of token
        const decoded = await promisify(jwt.verify)(loginToken,process.env.JWT_SECRET);
        const currentUser = await authService.protect(decoded.id);
        if(currentUser){
            return next(new AppError('You are already logged in.',401));
        }
    }
    next();
})