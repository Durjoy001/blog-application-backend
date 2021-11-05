var js2xmlparser = require("js2xmlparser");
sendJsonResponse = (blog,res) => {
    return blog;
}
sendXmlResponse = (blog,res) => {
    //res.type('application/xml');
    res.setHeader('content-type', 'application/xml');
    const newObj  = JSON.parse(JSON.stringify(blog));
    return js2xmlparser.parse("data", newObj);
}
exports.sendResponse = (req,blog,res) => {
    if(req.headers.accept === 'application/json'){
        const blogs =  sendJsonResponse(blog,res);
        return blogs;
    }
    else{
        console.log("djhfjk")
        const blogs =  sendXmlResponse(blog,res);
        return blogs;
    }
}
