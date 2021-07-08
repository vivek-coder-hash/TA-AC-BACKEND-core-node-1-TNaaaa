var http =  require("http")
var server = http.createServer(handleRequest)
var url = require("url")

var fs = require("fs")

function handleRequest(req,res)  {
    var parsedUrl=url.parse(req.url)
    var pathname = parsedUrl.pathname


    if (req.method === "GET" && req.url === "/home") {
        res.setHeader("Content-type" , "text/html")
        fs.readFile("./index.html" , (err,content)=> {
            res.end(content)
        })
  }


  else if   (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-type" , "text/html")
    fs.createReadStream("./about.html").pipe(res)
}
}



server.listen(3000 ,()=> {
    console.log("server listening on port 300")
})