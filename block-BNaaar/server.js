var http = require("http")

var server = http.createServer(handleRequest)

var url = require("url")

function handleRequest(req,res) {
    var parsedUrl=url.parse(req.url)
    var pathname = parsedUrl.pathname
  console.log(req.method , req.url , pathname)
  if (req.method === "GET" && req.url === "/") {
    res.write("welcome to index page")
    res.end()
}

else if (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-Type" , "text/html")
    res.write("<h2> this is all about NodeJS </h2>")
    res.end()
}

else if (req.method === "POST" && req.url === "/about") {
    
    res.write(`{message: this is a post request}`)
    res.end()
}

}



server.listen(5000, ()=> {
    console.log("server listening on port 5000")
})