class AuthService{
    constructor(authDao){
       this.authDao = authDao;
    }
    signup(req,next){
        return this.authDao.signup(req,next);
    };
    login(req,next){
        return this.authDao.login(req,next);
    };
    protect(req){
        return this.authDao.protect(req);
    };
}

module.exports = {AuthService};