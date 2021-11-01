const User = require('./../models/userModel');


exports.getAllUsers = async(req,res) =>{
    try{
        const users = await User.find();
        res.status(200).json({
            status: 'sucess',
            data:{
                users
            }
        });
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};
exports.createUser = (req,res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet implemented!!'
    });
};
exports.updateUser = (req,res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet implemented!!'
    });
};
exports.getUser = (req,res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet implemented!!'
    });
};
