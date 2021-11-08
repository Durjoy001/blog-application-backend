var js2xmlparser = require("js2xmlparser");
sendJsonResponse = (blog,res) => {
    return res.status(200).json({
        status: 'success',
        Blogs: blog.length,
        data: {
            blog
        }
   });
}
sendXmlResponse = (blog,res) => {
    //res.type('application/xml');
    res.setHeader('content-type', 'application/xml');
    const newObj  = JSON.parse(JSON.stringify(blog));
    return res.send(js2xmlparser.parse("data", newObj));
}
exports.sendResponse = (req,blog,res) => {
    if(req.headers.accept === 'application/json')
        sendJsonResponse(blog,res);
    else
        sendXmlResponse(blog,res);
}
