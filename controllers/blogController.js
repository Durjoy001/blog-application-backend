var express = require('express'), negotiate = require('express-negotiate');
var js2xmlparser = require("js2xmlparser");
const { MongoDbBlogDao } = require('../dao/mongoDbBlogDao');
const { BlogService } = require('../services/blogService');
const Blog = require('./../models/blogModel');
const contentNegotiate = require('./../utils/contentNegotiate');
const blogDao = new MongoDbBlogDao();
const blogService = new BlogService(blogDao);

exports.blogService = blogService;

exports.getAllBlogs = async(req,res) => {
    try{
        const blogs = await blogService.getAllBlogs();
        const NegotiateBlog = contentNegotiate.sendResponse(req,blogs,res);
        res.status(200).json({
            status: 'sucess',
            results: NegotiateBlog.length,
            data: {
                NegotiateBlog
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
        const NegotiateBlog = contentNegotiate.sendResponse(req,blog,res);
        res.status(200).json({
            status: 'sucess',
            results: NegotiateBlog.length,
            data: {
                NegotiateBlog
            }
        });
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.createBlog =  async(req,res,next) => {
    try{
        const blog = await blogService.createBlog(req,next)
        const NegotiateBlog = contentNegotiate.sendResponse(req,blog,res);
        res.status(200).json({
            status: 'sucess',
            results: NegotiateBlog.length,
            data: {
                NegotiateBlog
            }
        });
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};
exports.updateBlog = async(req,res,next) => {
   try{
        const blog = await blogService.updateBlog(req,next);
        const NegotiateBlog = contentNegotiate.sendResponse(req,blog,res);
        res.status(200).json({
            status: 'sucess',
            results: NegotiateBlog.length,
            data: {
                NegotiateBlog
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
        await blogService.deleteBlog(req);
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