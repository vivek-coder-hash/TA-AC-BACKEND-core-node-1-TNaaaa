let http =  require("http")

var server = http.createServer(handleRequest)

function handleRequest(res,req)  {
    res.statusCode =200
    console.log(req.headers)
    res.writeHead(201, {"Content-Type" : "text/html"})
    res.write("hello world")
    res.end("<h1>welcome to html</h1>")
}


server.listen(4444 , "localhost" , ()=> {
    console.log("server is listening")
})