var http =  require("http")
var server = http.createServer(handleRequest)
var url = require("url")

var fs = require("fs")

function handleRequest(req,res)  {
    var parsedUrl=url.parse(req.url)
    var pathname = parsedUrl.pathname


    if (req.method === "GET" && req.url === "/file") {
        res.setHeader("Content-type" , "text/html")
        fs.readFile("./node.html" , (err,content)=> {
            res.end(content)
        })
  }


  else if   (req.method === "GET" && req.url === "/steam") {
    res.setHeader("Content-type" , "text/html")
    fs.createReadStream("./about.html").pipe(res)
}
}



server.listen(5555 ,()=> {
    console.log("server listening on port 5555")
})