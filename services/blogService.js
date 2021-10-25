
const { BlogDao } = require('../dao and dto/blogDao');
class BlogService{
    constructor(blogDao){
       this.blogDao = blogDao;
    }
    createBlog(blogBody){
        return this.blogDao.createBlog(blogBody);
    };
    getBlog(blogId){
        return this.blogDao.getBlog(blogId);
    };
    getAllBlogs(){
        return this.blogDao.getAllBlogs();
    };
    updateBlog(blogId, updateBody){
        return this.blogDao.updateBlog(blogId, updateBody);
    };
    deleteBlog(blogId){
        return this.blogDao.deleteBlog(blogId);
    };
}

module.exports = {BlogService};