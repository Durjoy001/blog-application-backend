const mocks = require('node-mocks-http');
const User = require('./../../models/userModel');
const {MongoDbAuthDao} = require('./../../dao/mongoDbAuthDao');
const authDao = new MongoDbAuthDao();
const user = {
    name: 'tester',
    email: 'test@gmail.com',
    role: 'user',
    password: '12345',
    passwordConfirm: '12345',
    _id: 1
}

describe('Unit testing of authDao class', () => {
    test('Should signup user', async () => {
        const obj = jest.spyOn(User, 'create').mockImplementation(() => {
            return user;
        });
        const req = mocks.createRequest({
            body: user
        });
        const res =mocks.createResponse();
        await authDao.signup(req,res);
        const data = res._getData();
        expect(User.create).toHaveBeenCalledTimes(1);
        obj.mockRestore();
    })
})