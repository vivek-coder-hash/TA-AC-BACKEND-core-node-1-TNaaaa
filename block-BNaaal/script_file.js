var http = require("http")

http.createServer((req,res)=> {
    res.end("welcome to 4000")
}).listen(4000 , "localhost")