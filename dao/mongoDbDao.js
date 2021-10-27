const { BlogDao } = require("./blogDao");
const { Dto } = require("./../dto/dto");
const Blog = require('./../models/blogModel');

class MongoDbDao extends BlogDao{
    createBlog = async (blogBody) => {
        const blog = await Blog.create(blogBody);
        return new Dto(blog);
    };
    getBlog = async(blogId) => {
        const blog = await Blog.findById(blogId);
        return new Dto(blog);
    };
    getAllBlogs = async() =>{
        const blogs = await Blog.find();
        let Blogs  = [] ;
        for ( let i = 0 ; i < blogs.length; i++) {
            Blogs[i] = new Dto(blogs[i]);
        }
        return Blogs;
    };
    updateBlog = async (blogId, updateBody) => {
        const blog = await Blog.findByIdAndUpdate(blogId, updateBody,{
            new: true,
            runValidators: true
        });
        return new Dto(blog);
    };
    deleteBlog = async(blogId) =>{
        await Blog.findByIdAndDelete(blogId);
        return;
    }
}
module.exports = {MongoDbDao};