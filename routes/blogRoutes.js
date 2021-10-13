const express = require('express');

const blogController = require('./../controllers/blogController');

const blogValidators = require('./../validations/blogValidator');


const router = express.Router();

router.route('/')
.get(blogController.getAllBlogs)
.post(blogValidators.createBlogValidation(),blogValidators.validate,blogController.createBlog);

router.route('/:id').
get(blogController.getBlog).
patch(blogController.updateBlog).
delete(blogController.deleteBlog);

module.exports = router;