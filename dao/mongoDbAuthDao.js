const { AuthDao } = require("./authDao");
const { AuthDto } = require("../dto/authDto");
const User = require('./../models/userModel');
const AppError = require('./../utils/appError');

class MongoDbAuthDao extends AuthDao{
    signup = async (req,next) => {
        const newUser = await User.create(req.body);
        return new AuthDto(newUser);
    };
    login = async(req,next) => { 
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
        return new AuthDto(user);
    };
    protect = async(req) =>{
        const currentUser = await User.findById(req);
        return currentUser;
    }
}
module.exports = {MongoDbAuthDao};