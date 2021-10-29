const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const authMiddlewares = require('./../middlewares/authMiddlewares');

const router = express.Router();

router.post('/signup',authMiddlewares.isLogin,authController.signup);
router.post('/login',authMiddlewares.isLogin,authController.login);


router.route('/').get(userController.getAllUsers).post(userController.createUser);
router.route('/:id').get(userController.getUser).patch(userController.updateUser);

module.exports = router;