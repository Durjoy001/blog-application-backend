const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const authMiddlewares = require('./../middlewares/authMiddlewares');
const blogValidators = require('./../validations/blogValidator');
const authValidators = require('./../validations/authValidators')

const router = express.Router();

router.post('/signup',authValidators.signupValidation(),authValidators.validate, authMiddlewares.isLogin,authController.signup);
router.post('/login',authMiddlewares.isLogin,authController.login);
router.post('/logout',authMiddlewares.isLogout,authController.logout);
router.post('/generateToken',authController.generateToken);


router.route('/').get(userController.getAllUsers).post(userController.createUser);
router.route('/:id').get(userController.getUser).patch(userController.updateUser);

module.exports = router;