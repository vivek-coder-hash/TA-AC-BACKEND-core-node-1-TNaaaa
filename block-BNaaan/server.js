var http = require("http")

var server = http.createServer(handleRequest)

function handleRequest(req,res) {
    console.log(req.headers)
    console.log(req.method,req.url)
    res.end("welcome to NODE")
}

server.listen(5000 ,"localhost",()=> {
    console.log("Testing server")
})

