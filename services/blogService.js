
const{MongoBlogService} = require('./mongoBlogService');
const{mysqlBlogService} = require('./mysqlBlogService');

class BlogService{
    constructor(){
        if(this.service){
            return this.service;
        }
        else{
            if(process.env.DATABASE_NAME == 'mysql'){
                this.service = new mysqlBlogService();
            }
            else{
                this.service = new MongoBlogService();
               
            }
        };
    }
    createBlog(blogBody){
        return this.service.createBlog(blogBody);
    };
    getBlog(blogId){
        return this.service.getBlog(blogId);
    };
    getAllBlogs(){
        console.log("jsdhfjkdsh");
        return this.service.getAllBlogs();
    };
    updateBlog(blogId, updateBody){
        return this.service.updateBlog(blogId, updateBody)
    };
    deleteBlog(blogId){
        return this.service.deleteBlog(blogId)
    };
}

module.exports = {BlogService};