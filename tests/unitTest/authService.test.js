const { MongoDbAuthDao } = require("./../../dao/mongoDbAuthDao");
const { AuthService } = require("./../../services/authService");

const authDao = new MongoDbAuthDao();
const authService = new AuthService(authDao);

let user = {
    name: 'Durjoy',
    email: 'durjoy@gmail.com',
    role: 'user'
}

describe('AuthService', () => {
    test('Should create an user and response 201', async () => {
        jest.spyOn(authDao, 'signup').mockImplementation(() => {
            return user;
        });
        const res = await authService.signup(user);
        expect(authDao.signup).toHaveBeenCalledTimes(1);
        expect(res.name).toEqual("Durjoy");
    })

    test('Should login the user', async () => {
        jest.spyOn(authDao, 'login').mockImplementation( () => {
             return "sucess";
        });
        const req = {
            email: 'durjoy@gmail.com',
            password: 123
        }
        const res = await authService.login(req);
        expect(authDao.login).toHaveBeenCalledTimes(1)
        expect(res).toEqual("sucess");
    })
})
