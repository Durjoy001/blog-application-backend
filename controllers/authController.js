const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
require('dotenv').config();
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync')
const { MongoDbAuthDao } = require('./../dao/mongoDbAuthDao');
const { AuthService } = require('./../services/authService');
const { response } = require('../app');
const authDao = new MongoDbAuthDao();
const authService = new AuthService(authDao);
const authMiddlewares = require('./../middlewares/authMiddlewares');

exports.authService = authService;

const signAccessToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

const signRefreshToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_REFRESH_SECRET,{});
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
        const token = signAccessToken(newUser._id);
        const cookieOptions = authCookie();

        res.cookie('jwt',token,cookieOptions);

        res.status(201).json({
           
        });
        /*res.status(201).json({
            status: 'sucess',
            token,
            data: {
                user: newUser 
            }
        });*/
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.login = catchAsync(async(req,res,next) => {

    const userData = await authService.login(req,next);

    //if everything ok, send token to client
    const accessToken = signAccessToken(userData._id);
    const refToken = signRefreshToken(userData._id);

    //const rToken = refreshToken;
    const rEmail = req.body.email;

    const cookieOptions = authCookie();

    const result = await User.updateOne(
        {email : rEmail },{$set: {refreshToken: refToken}}
    )
    //console.log(result);
    res.cookie('jwt',accessToken,cookieOptions);

    res.status(200).json({
        //status: 'sucess',
        //name: user.name,
        accessToken,
        refToken 
    });
});

exports.logout = catchAsync(async(req,res,next) =>{
    let logToken;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        logToken = req.headers.authorization.split(' ')[1];
    }
    const decoded = await promisify(jwt.verify)(logToken,process.env.JWT_SECRET);
    const user = await authService.protect(decoded.id);
    const rEmail = user.email;
    const result = await User.updateOne(
        {email : rEmail },{$set: {refreshToken: ''}}
    )
    res.status(200).json({
        status: 'sucess'
        //name: user.name,
    });
});
