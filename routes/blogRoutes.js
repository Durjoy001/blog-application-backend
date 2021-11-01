const express = require('express');

const blogController = require('./../controllers/blogController');

const blogValidators = require('./../validations/blogValidator');

const authController = require('./../controllers/authController');

const authMiddlewares = require('./../middlewares/authMiddlewares');


const router = express.Router();

router.route('/')
.get(blogController.getAllBlogs)
.post(authMiddlewares.protect,blogValidators.createBlogValidation(),blogValidators.validate,blogController.createBlog);

router.route('/:id').
get(blogController.getBlog).
patch(authMiddlewares.protect,blogValidators.updateBlogValidation(),blogValidators.validate,blogController.updateBlog).
delete(authMiddlewares.protect,blogController.deleteBlog);
 
module.exports = router;