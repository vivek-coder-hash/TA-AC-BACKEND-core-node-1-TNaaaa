console.log('Welcome to Nodejs')

var os = require("os")
console.log(os.cpus().length)
console.log(os.freemem())
console.log(os.uptime())
console.log(os.version)


var {readFile , unlink} = require("fs")

