
const { BlogDao } = require('../dao/blogDao');
class BlogService{
    constructor(blogDao){
       this.blogDao = blogDao;
    }
    createBlog(req){
        return this.blogDao.createBlog(req);
    };
    getBlog(blogId){
        return this.blogDao.getBlog(blogId);
    };
    getAllBlogs(){
        return this.blogDao.getAllBlogs();
    };
    updateBlog(req){
        return this.blogDao.updateBlog(req);
    };
    deleteBlog(req){
        return this.blogDao.deleteBlog(req);
    };
}

module.exports = {BlogService};