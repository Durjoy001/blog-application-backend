class BlogDao{
    constructor() {
        if (this.constructor === BlogDao) {
          throw new Error("Abstract classes can't be instantiated.");
        }
      }
    createBlog = async (blogBody) => {

    };
    getBlog = async(blogId) => {
        
    };
    getAllBlogs = async() =>{

    };
    updateBlog = async (blogId, updateBody) => {
        
    };
    deleteBlog = async(blogId) =>{
        
    }
}
module.exports = {BlogDao};
