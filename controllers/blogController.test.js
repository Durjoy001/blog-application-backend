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
