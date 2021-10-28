class AuthService{
    constructor(authDao){
       this.authDao = authDao;
    }
    signup(req){
        return this.authDao.signup(req);
    };
    login(req){
        return this.authDao.login(req);
    };
    protect(req){
        return this.authDao.protect(req);
    };
}

module.exports = {AuthService};