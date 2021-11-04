var express = require('express'), negotiate = require('express-negotiate');
var js2xmlparser = require("js2xmlparser");
const { MongoDbBlogDao } = require('../dao/mongoDbBlogDao');
const { BlogService } = require('../services/blogService');
const Blog = require('./../models/blogModel');
const blogDao = new MongoDbBlogDao();
const blogService = new BlogService(blogDao);

exports.getAllBlogs = async(req,res) => {
    try{
        const blogs = await blogService.getAllBlogs();
        req.negotiate({
            'default': function() {
                res.status(200).json({
                    status: 'sucess',
                    results: blogs.length,
                    data: {
                       blogs
                    }
               });
          }
          , 'xml': function() {
              res.type('application/xml');
              const newObj  = JSON.parse(JSON.stringify(blogs));
              res.send(js2xmlparser.parse("data", newObj));
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
        req.negotiate({
            'default': function() {
                res.status(200).json({
                    status: 'sucess',
                    data: {
                       blog
                    }
               });
          }
          , 'xml': function() {
              const newObj  = JSON.parse(JSON.stringify(blog));
              res.send(js2xmlparser.parse("data", newObj));
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
        req.negotiate({
            'default': function() {
                res.status(201).json({
                    status: 'sucess',
                    data: {
                        Blog: blog
                    }
               });
          }
          , 'xml': function() {
              const newObj  = JSON.parse(JSON.stringify(blog));
              res.send(js2xmlparser.parse("data", newObj));
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
        
        req.negotiate({
            'default': function() {
                res.status(200).json({
                    status: 'sucess',
                    data: {
                        Blog: blog
                    }
               });
          }
          , 'xml': function() {
              const newObj  = JSON.parse(JSON.stringify(blog));
              res.send(js2xmlparser.parse("data", newObj));
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