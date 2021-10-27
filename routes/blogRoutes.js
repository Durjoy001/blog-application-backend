const express = require('express');

const blogController = require('./../controllers/blogController');

const blogValidators = require('./../validations/blogValidator');

const authController = require('./../controllers/authController');


const router = express.Router();

router.route('/')
.get(authController.protect,blogController.getAllBlogs)
.post(blogValidators.createBlogValidation(),blogValidators.validate,blogController.createBlog);

router.route('/:id').
get(blogController.getBlog).
patch(blogValidators.updateBlogValidation(),blogValidators.validate,blogController.updateBlog).
delete(blogController.deleteBlog);

module.exports = router;