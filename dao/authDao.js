class AuthDao{
    constructor() {
        if (this.constructor === AuthDao) {
          throw new Error("Abstract classes can't be instantiated.");
        }
      }
    signup = async (req) => {

    };
    login = async(req) => {
        
    };
    protect = async(req) =>{

    };
}
module.exports = {AuthDao};