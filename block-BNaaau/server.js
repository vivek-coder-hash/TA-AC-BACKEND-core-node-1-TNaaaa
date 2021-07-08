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



var http = require("http")
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
})