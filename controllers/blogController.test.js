const request = require('supertest');  
var js2xmlparser = require("js2xmlparser");
const sinon = require('jest-sinon');
const express = require('express');
const xml = require('xml')
const app = require('./../app');
const blogController = require('./../controllers/blogController');

const blogs = {
    name: "A Blog for C++ basic stuff",
    description: "something...",
    time: "9th january",
    creator: "user",
    id: "617a8b6eb02cac31f4259e0e"
}

/*app.get('/blog', function(req, res) {
  res.status(200).json({ 
        name: "A Blog for C++ basic stuff",
        description: "something...",
        time: "9th january",
        creator: "user",
        id: "617a8b6eb02cac31f4259e0e"});
});
describe('GET /blog', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/blog')
        .set('Accept', 'application/json')
        .expect('Content-Type',/json/)
        .expect(200,{
            name: "A Blog for C++ basic stuff",
            description: "something...",
            time: "9th january",
            creator: "user",
            id: "617a8b6eb02cac31f4259e0e"
        } ,done);
    });
});*/



app.get('/blog', function(req, res) {
    req.negotiate({
        'default': function() {
            res.status(200).json({
                /*status: 'sucess',
                results: blogs.length,
                data: {
                   blogs
                }*/
                blogs
           });
      }
      , 'xml': function() {
          res.type('application/xml');
          res.send(xml(blogs));
          //const newObj  = JSON.parse(JSON.stringify(blogs));
          //res.send(js2xmlparser.parse("data", newObj));
      }
  });
});


describe('GET /blog', function() {
      it('responds with json', function(done) {
        request(app)
          .get('/blog')
          .set('Accept', 'application/json')
          .expect('Content-Type',/json/)
          .expect(200,done);
      });
  });

describe('GET /blog', function() {
    it('responds with xml', function(done) {
      request(app)
        .get('/blog')
        .set('Accept', 'application/xml')
        .expect('Content-Type',/xml/)
        .expect(200,done);
    });
});

describe('GET /blog', function() {
    it('check responds body', function(done) {
      request(app)
        .get('/blog')
        .set('Accept', 'application/json')
        .expect('Content-Type',/json/)
        .expect(200,{
            blogs
        },done);
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////


/*describe('For a Blog ID which doesn not Exist',  function() {
    it('It should return a 404 and Error Message in xml format', function(done) {
        app.get('/pathDontExistXML', function(req, res) {
            const blogStub = sinon.stub(blogService,"getBlog").withArgs(req).returns("blog doesnot exist");
            const blog = blogService.getBlog(req);
            expect(blog).toEqual("blog doesnot exist");
            blogStub.restore();
            response.XMLBlogResponse(404,blog,res,"xml")
        })
        request(app)
        .get('/pathDontExistXML')
        .set('Accept', 'application/xml')
        .expect('Content-Type',"application/xml; charset=utf-8")
        .expect(200,js2xmlparser.parse("blogs",JSON.parse(JSON.stringify(({
            format : "xml",
            error : "Blog Doesnot Exist"
        })))),done)
    });
    it('It should return a 404 and error message in json format', function(done) {
        app.get('/pathDontExistJSON', function(req, res) {
            const blogStub = sinon.stub(blogService,"getBlog").withArgs(req).returns("blog doesnot exist");
            const blog = blogService.getBlog(req);
            expect(blog).toEqual("blog doesnot exist");
            blogStub.restore();
            response.JSONBlogResponse(200,blog,res,"json")}
        )
        request(app)
        .get('/pathDontExistJSON')
        .set('Accept', 'application/json')
        .expect('Content-Type',"application/json; charset=utf-8")
        .expect(200,{
            format : "xml",
            error : "Blog Doesnot Exist"
        },done)
    });
})*/

   
