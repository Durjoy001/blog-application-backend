const { BlogDao } = require("./blogDao");
const { BlogDto } = require("../dto/blogDto");
const Blog = require('./../models/blogModel');
const AppError = require('./../utils/appError');

class MongoDbDao extends BlogDao{
    createBlog = async (req,next) => {
       // console.log(req.user.name);
        req.body.creator = req.user.name;
        const blog = await Blog.create(req.body);
        return new BlogDto(blog);
    };
    getBlog = async(blogId) => {
        const blog = await Blog.findById(blogId);
        return new BlogDto(blog);
    };
    getAllBlogs = async() =>{
        const blogs = await Blog.find();
        let Blogs  = [] ;
        for ( let i = 0 ; i < blogs.length; i++) {
            Blogs[i] = new BlogDto(blogs[i]);
        }
        return Blogs;
    };
    updateBlog = async (req,next) => {
        const findBlog = await Blog.findById(req.params.id);
        if(req.user.name != findBlog.creator){
            throw new AppError('You do not have permission to perform this action!!',403);
        }
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });
        return new BlogDto(blog);
    };
    deleteBlog = async(req) =>{
        const findBlog = await Blog.findById(req.params.id);
        if(req.user.name != findBlog.creator){
            throw new AppError('You do not have permission to perform this action!!',403);
        }
        await Blog.findByIdAndDelete(req.params.id);
        return;
    }
}
module.exports = {MongoDbDao};