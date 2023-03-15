class AuthDto{
    constructor(user){
        let userDto = JSON.parse(JSON.stringify(user));
        this.name = userDto.name;
        this.email = userDto.email;
        this.role = userDto.role;
        this.refreshToken = userDto.refreshToken;
        this.password = userDto.password;
        this._id = userDto._id;
    }
}
module.exports = {AuthDto};