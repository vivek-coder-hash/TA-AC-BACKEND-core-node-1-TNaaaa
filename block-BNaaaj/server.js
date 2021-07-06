var url = require("url")

const parsedUrl = url.parse(
    "https://airindia.com/fares/calculate?from=delhi&to=detroitand",
    true
  );
  console.log(parsedUrl.query);   //use parse method from url module to parse query string as well.
  console.log(parsedUrl.protocol)
  console.log(parsedUrl.pathname)
