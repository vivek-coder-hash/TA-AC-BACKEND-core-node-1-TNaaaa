var area  = require("./area.js")
var circleArea  = area.circle(2)

console.log(circleArea)



var buffer1=Buffer.alloc(12)  // made new buffer of length 12

var buffer2 = Buffer.allocUnsafe(12)


buffer1.write("hello internet")

console.log(buffer1)
console.log(buffer1.toString())
console.log(buffer2)


/*  Write code example to demonstrate blocking and non-blocking code.*/


var {readFile , readFileSync , unlink}  = require("fs")

var sync  = readFileSync("./area.js")   // sync does not require call back 

console.log(sync +":sync")

readFile("./area.js" , (err , content)=> {
  console.log(content)
})


