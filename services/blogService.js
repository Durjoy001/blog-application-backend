
const { BlogDao } = require('../dao/blogDao');
class BlogService{
    constructor(blogDao){
       this.blogDao = blogDao;
    }
    createBlog(req,next){
        return this.blogDao.createBlog(req,next);
    };
    getBlog(blogId){
        return this.blogDao.getBlog(blogId);
    };
    getAllBlogs(){
        return this.blogDao.getAllBlogs();
    };
    updateBlog(req,next){
        return this.blogDao.updateBlog(req,next);
    };
    deleteBlog(req){
        return this.blogDao.deleteBlog(req);
    };
}

module.exports = {BlogService};