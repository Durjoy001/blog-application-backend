const { BlogService } = require('../services/blogService');

const blogService = new BlogService();

exports.getAllBlogs = async(req,res) => {
    try{
        //const blogs = await Blog.find();
        console.log('bal');
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
        //const blog = await Blog.findById(req.params.id);
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
        //const newBlog = await Blog.create(req.body);
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
        /*const blog = await Blog.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });*/
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
        //await Blog.findByIdAndDelete(req.params.id);
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