class AuthDao{
    constructor() {
        if (this.constructor === AuthDao) {
          throw new Error("Abstract classes can't be instantiated.");
        }
      }
    signup = async (req,next) => {

    };
    login = async(req,next) => {
        
    };
    protect = async(req) =>{

    };
}
module.exports = {AuthDao};