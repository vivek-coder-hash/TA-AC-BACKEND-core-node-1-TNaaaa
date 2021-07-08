/*var http = require("http")
var url = require("url")
var server = http.createServer(handleRequest)
var fs = require("fs")

function handleRequest(req,res) {
    console.log(req , res)
    res.setHeader("Content-type" , "text/html")
    res.end("port 5000")
}




server.listen(5000 , ()=> {
    console.log("server listening to 5000 port")
}) */



/*var http = require("http")
var url = require("url")
var server = http.createServer(handleRequest)
var fs = require("fs")

function handleRequest(req,res) {
    console.log(req , res)
    res.setHeader("Content-type" , "text/html")
    res.end("My first node js server")
}




server.listen(5100 , ()=> {
    console.log("server listening to 5100 port")
}) */



/*var http = require("http")
var url = require("url")
var server = http.createServer(handleRequest)
var fs = require("fs")

function handleRequest(req,res) {
    console.log(req.headers)
    res.setHeader("Content-type" , "text/html")
    res.end(req.headers["user-agent"])
}




server.listen(5555 , ()=> {
    console.log("server listening to 5555 port")
}) */



/*var http = require("http")
var url = require("url")
var server = http.createServer(handleRequest)
var fs = require("fs")

function handleRequest(req,res) {
    console.log(req.method , req.url)
    res.setHeader("Content-type" , "text/html")
    res.end(req.method+req.url)
}




server.listen(5566 , ()=> {
    console.log("server listening to 5566 port")
})*/


/*var http = require("http")
var url = require("url")
var server = http.createServer(handleRequest)
var fs = require("fs")

function handleRequest(req,res) {
    
    
    res.end(JSON.stringify(req.headers)) //return entire request headers in response.
}




server.listen(7000 , ()=> {
    console.log("server listening to 7000 port")
})*/



/*var http = require("http")
var url = require("url")
var server = http.createServer(handleRequest)
var fs = require("fs")

function handleRequest(req,res) {
    res.statusCode =201
    
    res.end(JSON.stringify(req.headers)) //return entire request headers in response.
}




server.listen(3333 , ()=> {
    console.log("server listening to 3333 port")
})*/



/*var http = require("http")
var url = require("url")
var server = http.createServer(handleRequest)
var fs = require("fs")

function handleRequest(req,res) {
    
    res.setHeader("Content-type" , "text/html") // set appropriate header for html response using res.setHeader
    res.end("<h3>Welcome to altcampus</h3>") //return entire request headers in response.
}




server.listen(8000 , ()=> {
    console.log("server listening to 8000 port")
})*/




/*var http = require("http")
var url = require("url")
var server = http.createServer(handleRequest)
var fs = require("fs")

function handleRequest(req,res) {

    res.writeHead(201 , {"Content-type" : "application/json"})
    
   
    res.end(JSON.stringify( {
        success:true,
        message: "welcome to node-js"
    })) //return entire request headers in response.
}




server.listen(8888 , ()=> {
    console.log("server listening to 8888 port")
})  */


/*var http = require("http")
var url = require("url")
var server = http.createServer(handleRequest)
var fs = require("fs")

function handleRequest(req,res) {
    console.log(req.method)

    res.writeHead(201 , {"Content-type" : "text/html"})
    
   
    res.end("<h2>posted for first time</h2>")
}




server.listen(5050 , ()=> {
    console.log("server listening to 5050 port")
})*/


/*var http = require("http")
var url = require("url")
var server = http.createServer(handleRequest)
var fs = require("fs")

function handleRequest(req,res) {
    

   
    
   
    if (req.method === "GET" && req.url === "/") {
        res.setHeader("Content-type" , "text/plain")
        res.end("vivek sharma")
  }

  else if   (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-type" , "text/html")
    res.end("<h2>vivek sharma(/h2>")
}

else {
    res.statusCode =404
    res.end("page not found")
}
}








server.listen(2345 , ()=> {
    console.log("server listening to 2345 port")
})*/


/*var http = require("http")
var url = require("url")
var server = http.createServer(handleRequest)
var fs = require("fs")

function handleRequest(req,res) {
if (req.method === "GET" &&  req.url === "/users") {
    res.setHeader("Content-type" , "text/html")
    fs.createReadStream("./form.html").pipe(res) 
}
}


server.listen(2345 , ()=> {
    console.log("server listening to 2345 port")
})*/






var http =  require("http")
var server = http.createServer(handleRequest)
var url = require("url")

var fs = require("fs")

function handleRequest(req,res)  {
    var parsedUrl=url.parse(req.url,true)
    var pathname = parsedUrl.pathname

    console.log(parsedUrl , pathname)

    res.end(parsedUrl.query)

}



server.listen(5555 ,()=> {
    console.log("server listening on port 5555")
})


