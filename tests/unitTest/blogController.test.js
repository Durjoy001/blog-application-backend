const { mockRequest, mockResponse } = require('mock-req-res')
const { BlogService } = require("./../../services/blogService");
const { MongoDbBlogDao } = require("./../../dao/mongoDbBlogDao");
const blogController  = require("./../../controllers/blogController");

//const blogDao = new MongoDbBlogDao();
//const blogService = new BlogService(blogDao);

const blog = {
    name: "A Blog for C++ basic stuff",
    description: "something...",
    time: "9th january",
    creator: "user"
}

describe('Unit testing of getAllBlogs method of BlogController class', () => {
    test('Should get blog and called only one times', async () => {
        jest.spyOn(blogController.blogService, 'getAllBlogs').mockImplementation(() => {
            return blog;
        });
        const req = mockRequest({
            headers: {
                accept:'application/json'
            }
        });
        const res = mockResponse();
        const blogs = await blogController.getAllBlogs(req,res);
        console.log(blogs);
        expect(blogController.blogService.getAllBlogs).toHaveBeenCalledTimes(1);
    })
})