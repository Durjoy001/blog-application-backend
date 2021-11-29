var js2xmlparser = require("js2xmlparser");
sendJsonResponse = (blog,res) => {
    return res.status(200).json({
        status: 'success',
        Blogs: blog.length,
        /*data: {
            blog
        }*/
        blog
   });
}
sendXmlResponse = (blog,res) => {
    //res.type('application/xml');
    res.setHeader('content-type', 'application/xml');
    const newObj  = JSON.parse(JSON.stringify(blog));
    return res.send(js2xmlparser.parse("data", newObj));
}
exports.sendResponse = (req,blog,res) => {
    if(req.headers.accept === 'application/xml')
        sendXmlResponse(blog,res);
    else
        sendJsonResponse(blog,res);
}
