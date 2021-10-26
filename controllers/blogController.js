var express = require('express'), negotiate = require('express-negotiate');
var js2xmlparser = require("js2xmlparser");
const Blog = require('./../models/blogModel');


exports.getAllBlogs = async(req,res) => {
    try{
        const blogs = await Blog.find();
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
        const blog = await Blog.findById(req.params.id);
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
exports.createBlog =  async(req,res) => {
    try{
        const newBlog = await Blog.create(req.body);
        req.negotiate({
            'default': function() {
                res.status(201).json({
                    status: 'sucess',
                    data: {
                        Blog: newBlog
                    }
               });
          }
          , 'xml': function() {
              const newObj  = JSON.parse(JSON.stringify(newBlog));
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
exports.updateBlog = async(req,res) => {
   try{
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });
        
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
        await Blog.findByIdAndDelete(req.params.id);
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