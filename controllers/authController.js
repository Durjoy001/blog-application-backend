const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
require('dotenv').config();
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync')
const { MongoDbAuthDao } = require('./../dao/mongoDbAuthDao');
const { AuthService } = require('./../services/authService');
const authDao = new MongoDbAuthDao();
const authService = new AuthService(authDao);

exports.authService = authService;

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}
const authCookie = ()=> {
    const cookieOptions = {
        expires: new Date(
            Date.now()+process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }
    if(process.env.NODE_ENV === 'production'){
        cookieOptions.secure = true;
    }
}
exports.signup = async(req,res,next) => {
    try{
        const newUser = await authService.signup(req,next);
        const token = signToken(newUser._id);
        const cookieOptions = authCookie();

        res.cookie('jwt',token,cookieOptions);

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
    const cookieOptions = authCookie();
    //console.log(user.name);
    res.cookie('jwt',token,cookieOptions);
    res.status(200).json({
        status: 'sucess',
        name: user.name,
        token
    });
});
