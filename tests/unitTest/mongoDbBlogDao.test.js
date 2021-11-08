const mocks = require('node-mocks-http');
const Blog = require('./../../models/blogModel');
const {MongoDbBlogDao} = require('./../../dao/mongoDbBlogDao');

const blogDao = new MongoDbBlogDao();

const blog = {
    name: "A Blog for C++ basic stuff",
    description: "something...",
    time: "9th january",
    creator: 'tester',
    _id: 12
}
const newUser = {
    name: "tester"
}

describe('Unit testing of Dao class', () => {
    test('Should create a blog', async () => {
        const obj = jest.spyOn(Blog, 'create').mockImplementation(() => {
            return blog;
        });
        const req = mocks.createRequest({
            body: blog,
            user: newUser
        });
        const res =mocks.createResponse();
        await blogDao.createBlog(req,res);
        const data = res._getData();
        expect(Blog.create).toHaveBeenCalledTimes(1);
        obj.mockRestore();
    })
    test('Should get a blog', async () => {
        const obj = jest.spyOn(Blog, 'findById').mockImplementation(() => {
            return blog;
        });
        const req = mocks.createRequest({
            params: 1
        });
        const res =mocks.createResponse();
        await blogDao.getBlog(req,res);
        const data = res._getData();
        expect(Blog.findById).toHaveBeenCalledTimes(1);
        obj.mockRestore();
    })
    test('Should get all blogs', async () => {
        const obj = jest.spyOn(Blog, 'find').mockImplementation(() => {
            return blog;
        });
        const req = mocks.createRequest();
        const res =mocks.createResponse();
        await blogDao.getAllBlogs(req,res);
        const data = res._getData();
        expect(Blog.find).toHaveBeenCalledTimes(1);
        obj.mockRestore();
    })
    test('Should delete blogs', async () => {
        const obj = jest.spyOn(Blog, 'findById').mockImplementation(() => {
            return blog;
        });
        const obj2 = jest.spyOn(Blog, 'findByIdAndDelete').mockImplementation(() => {
            
        });
        const req = mocks.createRequest({
            body: blog,
            user: newUser
        });
        const res =mocks.createResponse();
        await blogDao.deleteBlog(req,res);
        const data = res._getData();
        expect(Blog.findByIdAndDelete).toHaveBeenCalledTimes(1);
        obj.mockRestore();
        obj2.mockRestore();
    })
})