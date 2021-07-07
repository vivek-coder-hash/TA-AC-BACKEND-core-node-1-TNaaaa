let http =  require("http")

var server = http.createServer(handleRequest)

function handleRequest(res,req)  {
    console.log(req.method)
    res.statusCode =201
   
    res.setHeader("Content-Type" , "text/html")
    res.write("hello world")
    res.end("<h1>welcome to NODE JS</h1>")
}


server.listen(4000 , "localhost" , ()=> {
    console.log("server is listening port 4444")
})