const mocks = require('node-mocks-http');
const authController  = require("./../../controllers/authController");

authService = authController.authService;

const user = {
    name: 'tester',
    email: 'test@gmail.com',
    password: '12345',
    passwordConfirm: '12345'
}
const signupResponse = {
    name: 'tester',
    email: 'test@gmail.com',
    _id: 1
}
const loginCredentials = {
    email: 'test@gmail.com',
    password: '12345'
}

describe('Unit testing of authController class', () => {
    test('Should create a user and get 201 status code', async () => {
        const obj = jest.spyOn(authService, 'signup').mockImplementation(() => {
            return signupResponse;
        });
        const req = mocks.createRequest({
            body: user
        });
        const res =mocks.createResponse();
        await authController.signup(req,res);
        const data = res._getJSONData();
        const content_type = res._getHeaders()['content-type'];
        expect(authService.signup).toHaveBeenCalledTimes(1);
        expect(data.status).toBe('sucess')
        expect(res.statusCode).toBe(201);
        expect(content_type).toBe("application/json");
        expect(data.data.user).toEqual(signupResponse);
        obj.mockRestore();
    })
    test('Should get signup request and throws error', async () => {
        const obj = jest.spyOn(authService, 'signup').mockImplementation(() => {
            throw new error('something wrong');
        });
        const req = mocks.createRequest({
            body: user
        });
        const res =mocks.createResponse();
        await authController.signup(req,res);
        expect(authService.signup).toHaveBeenCalledTimes(1);
        obj.mockRestore();
    })
    test('Should login a user and get 200 status code', async () => {
        const obj = jest.spyOn(authService, 'login').mockImplementation(() => {
            return signupResponse;
        });
        const req = mocks.createRequest({
            body: loginCredentials
        });
        const res =mocks.createResponse();
        await authController.login(req,res);
        const data = res._getJSONData();
        const content_type = res._getHeaders()['content-type'];
        expect(authService.login).toHaveBeenCalledTimes(1);
        expect(data.status).toBe('sucess')
        expect(res.statusCode).toBe(200);
        expect(content_type).toBe("application/json");
        obj.mockRestore();
    })
})