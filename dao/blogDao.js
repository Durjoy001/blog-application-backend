class BlogDao{
    constructor() {
        if (this.constructor === BlogDao) {
          throw new Error("Abstract classes can't be instantiated.");
        }
      }
    createBlog = async (req,next) => {

    };
    getBlog = async(blogId) => {
        
    };
    getAllBlogs = async() =>{

    };
    updateBlog = async (req,next) => {
        
    };
    deleteBlog = async(req) =>{
        
    }
}
module.exports = {BlogDao};
