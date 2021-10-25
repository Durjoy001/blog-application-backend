const { MongoDbDao } = require('../dao and dto/mongoDbDao');
const { BlogService } = require('../services/blogService');


const blogDao = new MongoDbDao();

const blogService = new BlogService(blogDao);

exports.getAllBlogs = async(req,res) => {
    try{
        const blogs = await blogService.getAllBlogs();
        
        res.status(200).json({
            status: 'sucess',
            results: blogs.length,
            data: {
               blogs
            }
       });
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.getBlog = async (req,res) => {

    try{
        const blog = await blogService.getBlog(req.params.id);
        res.status(200).json({
        status: 'sucess',
        data: {
           blog
        } 
    });
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.createBlog =  async(req,res) => {
    try{
        const blog = await blogService.createBlog(req.body)

        res.status(201).json({
            status: 'sucess',
            data: {
                Blog: blog
            }
       });
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};
exports.updateBlog = async(req,res) => {
   try{
        const blog = await blogService.updateBlog(req.params.id, req.body);

        res.status(200).json({
            status: 'sucess',
            data: {
               blog
            }
        });
   }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
   }
};

exports.deleteBlog =async (req,res) => {
    try{
        await blogService.deleteBlog(req.params.id);
        res.status(204).json({
            status: 'sucess',
            data: null
        });
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    } 
}