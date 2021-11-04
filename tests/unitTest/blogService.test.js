const { BlogService } = require("./../../services/blogService");
const { MongoDbBlogDao } = require("./../../dao/mongoDbBlogDao");

const blogDao = new MongoDbBlogDao();
const blogService = new BlogService(blogDao);

const blog = {
    name: "A Blog for C++ basic stuff",
    description: "something...",
    time: "9th january",
    creator: "user"
}

describe('Unit testing of createBlog method of BlogService class', () => {
    test('Should create a blog and called only one times', async () => {
        jest.spyOn(blogDao, 'createBlog').mockImplementation(() => {
            return blog;
        });
        const req = {
            body: blog
        }
        const res = await blogService.createBlog(req);
        expect(blogDao.createBlog).toHaveBeenCalledTimes(1);
    })

    test('Should create a blog and return this blog', async () => {
        jest.spyOn(blogDao, 'createBlog').mockImplementation(() => {
            return blog;
        });
        const req = {
            body: blog
        }
        const res = await blogService.createBlog(req);
        expect(blogDao.createBlog).toHaveReturnedWith(res);
    })
})

describe('Unit testing of getAllBlogs method of BlogService class', () => {
    test('Should get blog and called one times only', async () => {
        jest.spyOn(blogDao, 'getAllBlogs').mockImplementation(() => {
            return blog;
        });
        const res = await blogService.getAllBlogs();
        expect(blogDao.getAllBlogs).toHaveBeenCalledTimes(1);
        expect(res.name).toEqual("A Blog for C++ basic stuff");
    })
    test('Should get blog', async () => {
        jest.spyOn(blogDao, 'getAllBlogs').mockImplementation(() => {
            return blog;
        });
        const res = await blogService.getAllBlogs();
        expect(res).toEqual(blog);
    })
})

describe('Unit testing of deleteBlog method and updateBlog method of BlogService class', () => {
    test('Should update the Blog and return the updated blog', async () => {
        jest.spyOn(blogDao, 'updateBlog').mockImplementation(() => {
            blog.name = "changed name";
            return blog;
        });
        const req = {
            body: "changed name"
        }
        const res = await blogService.updateBlog(req);
        expect(blogDao.updateBlog).toHaveBeenCalledTimes(1);
        expect(res.name).toEqual("changed name");
    })
    test('Should delete blog', async () => {
        jest.spyOn(blogDao, 'deleteBlog').mockImplementation(() => {
            return "sucess";
        });
        const id = 0;
        const res = await blogService.deleteBlog(id);
        expect(res).toEqual("sucess");
        expect(blogDao.deleteBlog).toHaveBeenCalledTimes(1);
    })
})

