/*var url = require("url");
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl.path);*/


var url = require("url")
const parsedUrl = url.parse("https://www.google.com/" , true)

console.log(parsedUrl)