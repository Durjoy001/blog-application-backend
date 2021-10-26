const User = require('./../models/userModel');


exports.signup = async(req,res) => {
    try{
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: 'sucess',
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