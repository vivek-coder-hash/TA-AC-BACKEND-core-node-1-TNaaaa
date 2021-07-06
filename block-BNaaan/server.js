let http = require("http")

let server = http.createServer(handleRequest)

function handleRequest(req,res) {
    res.end("welcome to NODE")
}

server.listen(3000 , "localhost" , ()=> {
    console.log("Testing server")
})

