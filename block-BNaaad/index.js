/* open REPL(in terminal)
- execute some javascript code, for example...`(2+2)`
- write a function to square a number

- Create a file named index.js with console.log('Welcome to Node.js') as script and run it using script processor mode (`node index.js`)
- add a for loop to sum integers from 1 to 10 in index.js and rerun the script.*/


console.log(2+2)

function square(num) {
    return num*num
}

console.log(square(5))


sum =0
for (let i=1 ; i<=10 ;i++) {
    sum= sum+i
}

console.log(sum)