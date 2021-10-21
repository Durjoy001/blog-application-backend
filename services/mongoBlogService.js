const Blog = require('./../models/blogModel');

class MongoBlogService{
    createBlog = async (blogBody) => {
        console.log("hi");
        const blog = await Blog.create(blogBody);
        return blog;
    };
    getBlog = async(blogId) => {
        const blog = await Blog.findById(blogId);
        return blog;
    };
    getAllBlogs = async() =>{
        console.log('dsjhfdj');
        const blogs = await Blog.find();
        return blogs;
    };
    updateBlog = async (blogId, updateBody) => {
        const blog = await Blog.findByIdAndUpdate(blogId, updateBody,{
            new: true,
            runValidators: true
        });
        return blog;
    };
    deleteBlog = async(blogId) =>{
        await Blog.findByIdAndDelete(blogId);
        return;
    }
}
module.exports = {MongoBlogService};