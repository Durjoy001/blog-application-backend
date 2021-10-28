const express = require('express');

const blogController = require('./../controllers/blogController');

const blogValidators = require('./../validations/blogValidator');

const authController = require('./../controllers/authController');


const router = express.Router();

router.route('/')
.get(blogController.getAllBlogs)
.post(authController.protect,blogValidators.createBlogValidation(),blogValidators.validate,blogController.createBlog);

router.route('/:id').
get(blogController.getBlog).
patch(authController.protect,blogValidators.updateBlogValidation(),blogValidators.validate,blogController.updateBlog).
delete(authController.protect,blogController.deleteBlog);
 
module.exports = router;