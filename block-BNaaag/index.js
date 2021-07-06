var {readFile , readFileSync} = require("fs")

readFile("./content.md" , (err, content)=> {
    console.log(err,content.toString())
})


var result =readFileSync("./content.md" , "utf8")

console.log(result)


var buff1 = Buffer.alloc(10)
buff1.write("welcome to Buffer")
console.log(buff1)