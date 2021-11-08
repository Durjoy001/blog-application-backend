const { mockRequest, mockResponse } = require('mock-req-res')
const { BlogService } = require("./../../services/blogService");
const { MongoDbBlogDao } = require("./../../dao/mongoDbBlogDao");
const blogController  = require("./../../controllers/blogController");
const contentNegotiate = require('./../../utils/contentNegotiate');

const mocks = require('node-mocks-http');

const blog = {
    name: "A Blog for C++ basic stuff",
    description: "something...",
    time: "9th january",
    creator: "user"
}

describe('Unit testing of getAllBlogs method of BlogController class', () => {
    test('Should get all blogs in json formet', async () => {
        const obj = jest.spyOn(blogController.blogService, 'getAllBlogs').mockImplementation(() => {
            return blog;
        });
        const req = mocks.createRequest({
            headers: {
                accept:'application/json'
            }
        });
        const res =mocks.createResponse();
        await blogController.getAllBlogs(req,res);
        const data = res._getJSONData();
        const content_type = res._getHeaders()['content-type'];
        expect(blogController.blogService.getAllBlogs).toHaveBeenCalledTimes(1);
        expect(data.status).toBe('success')
        expect(res.statusCode).toBe(200);
        expect(content_type).toBe("application/json");
        expect(data.data.blog).toEqual(blog);
        obj.mockRestore();
    })
    test('Should get all blogs request and throws error', async () => {
        const obj = jest.spyOn(blogController.blogService, 'getAllBlogs').mockImplementation(() => {
            throw new error('blogs not found');
        });
        const req = mocks.createRequest({
            headers: {
                accept:'application/json'
            }
        });
        const res =mocks.createResponse();
        await blogController.getAllBlogs(req,res);
        expect(blogController.blogService.getAllBlogs).toHaveBeenCalledTimes(1);
        obj.mockRestore();
    })
    test('Should get all blogs in xml formet', async () => {
        const obj = jest.spyOn(blogController.blogService, 'getAllBlogs').mockImplementation(() => {
            return blog;
        });
        const req = mocks.createRequest({
            headers: {
                accept:'application/xml'
            }
        });
        const res =mocks.createResponse();
        await blogController.getAllBlogs(req,res);
        const data = res._getData();
        const content_type = res._getHeaders()['content-type'];
        expect(blogController.blogService.getAllBlogs).toHaveBeenCalledTimes(1);
        expect(res.statusCode).toBe(200);
        expect(content_type).toBe("application/xml");
        obj.mockRestore();
    })
})

describe('Unit testing of getBlog method of BlogController class', () => {
    test('Should get blog by id in json formet', async () => {
        const obj = jest.spyOn(blogController.blogService, 'getBlog').mockImplementation(() => {
            return blog;
        });
        const req = mocks.createRequest({
            headers: {
                accept:'application/json'
            },
            params: {
                id: 0
            }
        });
        const res =mocks.createResponse();
        await blogController.getBlog(req,res);
        const data = res._getJSONData();
        const content_type = res._getHeaders()['content-type'];
        expect(blogController.blogService.getBlog).toHaveBeenCalledTimes(1);
        expect(data.status).toBe('success')
        expect(res.statusCode).toBe(200);
        expect(content_type).toBe("application/json");
        expect(data.data.blog).toEqual(blog);
        obj.mockRestore();
    })
    test('Should get blog by id  request and throws error', async () => {
        const obj = jest.spyOn(blogController.blogService, 'getBlog').mockImplementation(() => {
            throw new error('blog not found');
        });
        const req = mocks.createRequest({
            headers: {
                accept:'application/json'
            },
            params: {
                id: 0
            }
        });
        const res =mocks.createResponse();
        await blogController.getBlog(req,res);
        expect(blogController.blogService.getBlog).toHaveBeenCalledTimes(1);
        obj.mockRestore();
    })
    test('Should get blog in xml formet', async () => {
        const obj = jest.spyOn(blogController.blogService, 'getAllBlogs').mockImplementation(() => {
            return blog;
        });
        const req = mocks.createRequest({
            headers: {
                accept:'application/xml'
            },
            params: {
                id: 0
            }
        });
        const res =mocks.createResponse();
        await blogController.getAllBlogs(req,res);
        const data = res._getData();
        const content_type = res._getHeaders()['content-type'];
        expect(blogController.blogService.getAllBlogs).toHaveBeenCalledTimes(1);
        expect(res.statusCode).toBe(200);
        expect(content_type).toBe("application/xml");
        obj.mockRestore();
    })
})
describe('Unit testing of createBlog method of BlogController class', () => {
    test('Should create a blog and get this blog in json formet as response', async () => {
        const obj = jest.spyOn(blogController.blogService, 'createBlog').mockImplementation(() => {
            return blog;
        });
        const req = mocks.createRequest({
            headers: {
                accept:'application/json'
            },
            body: {
                name: "A blog for c++ basic stuff..",
                description: "something...."
            }
        });
        const res =mocks.createResponse();
        await blogController.createBlog(req,res);
        const data = res._getJSONData();
        const content_type = res._getHeaders()['content-type'];
        expect(blogController.blogService.createBlog).toHaveBeenCalledTimes(1);
        expect(data.status).toBe('success')
        expect(content_type).toBe("application/json");
        expect(data.data.blog).toEqual(blog);
        obj.mockRestore();
    })
    test('Should createBlog request and throws error', async () => {
        const obj = jest.spyOn(blogController.blogService, 'createBlog').mockImplementation(() => {
            throw new error('Some error occured');
        });
        const req = mocks.createRequest({
            headers: {
                accept:'application/json'
            },
            body: {
                name: "A blog for c++ basic stuff..",
                description: "something...."
            }
        });
        const res =mocks.createResponse();
        await blogController.createBlog(req,res);
        expect(blogController.blogService.createBlog).toHaveBeenCalledTimes(1);
        obj.mockRestore();
    })
})

describe('Unit testing of updateBlog method of BlogController class', () => {
    test('Should update a blog and get this blog in json formet as response', async () => {
        const obj = jest.spyOn(blogController.blogService, 'updateBlog').mockImplementation(() => {
            return blog;
        });
        const req = mocks.createRequest({
            headers: {
                accept:'application/json'
            },
            body: {
                name: "A blog for c++ basic stuff..",
            }
        });
        const res =mocks.createResponse();
        await blogController.updateBlog(req,res);
        const data = res._getJSONData();
        const content_type = res._getHeaders()['content-type'];
        expect(blogController.blogService.updateBlog).toHaveBeenCalledTimes(1);
        expect(data.status).toBe('success')
        expect(content_type).toBe("application/json");
        expect(data.data.blog).toEqual(blog);
        obj.mockRestore();
    })
    test('Should updaterBlog request and throws error', async () => {
        const obj = jest.spyOn(blogController.blogService, 'updateBlog').mockImplementation(() => {
            throw new error('Some error occured');
        });
        const req = mocks.createRequest({
            headers: {
                accept:'application/json'
            },
            body: {
                name: "A blog for c++ basic stuff.."
            }
        });
        const res =mocks.createResponse();
        await blogController.updateBlog(req,res);
        expect(blogController.blogService.updateBlog).toHaveBeenCalledTimes(1);
        obj.mockRestore();
    })
})

describe('Unit testing of deleteBlog method of BlogController class', () => {
    test('Should delete a blog', async () => {
        const obj = jest.spyOn(blogController.blogService, 'deleteBlog').mockImplementation(() => {
            return "sucess";
        });
        const req = mocks.createRequest({
            headers: {
                accept:'application/json'
            },
            params: {
                id: 0
            }
        });
        const res =mocks.createResponse();
        await blogController.deleteBlog(req,res);
        const data = res._getJSONData();
        const content_type = res._getHeaders()['content-type'];
        expect(blogController.blogService.deleteBlog).toHaveBeenCalledTimes(1);
        expect(data.status).toBe('sucess')
        expect(content_type).toBe("application/json");
        obj.mockRestore();
    })
    test('Should updaterBlog request and throws error', async () => {
        const obj = jest.spyOn(blogController.blogService, 'deleteBlog').mockImplementation(() => {
            throw new error('Some error occured');
        });
        const req = mocks.createRequest({
            headers: {
                accept:'application/json'
            },
            params: {
                id: 0
            }
        });
        const res =mocks.createResponse();
        await blogController.deleteBlog(req,res);
        expect(blogController.blogService.deleteBlog).toHaveBeenCalledTimes(1);
        obj.mockRestore();
    })
})