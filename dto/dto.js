class Dto{
    constructor(blog){
        let blogDto = JSON.parse(JSON.stringify(blog));
        this.name = blogDto.name;
        this.description = blogDto.description;
        this.time = blogDto.time;
        this.creator = blogDto.creator;
        this.id = blogDto._id;
    }
}
module.exports = {Dto};