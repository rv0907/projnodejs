const http = require("http");
const fs = require("fs");
const myserver = http.createServer((request, response) => {
  const da = `${Date.now()}:new request\n`;
  fs.appendFile("log.txt", da, () => {
    response.end("got the response");
  });
});
const a = require("os");
// console.log(a.cpus());
myserver.listen(8000, () => {
  console.log("server running");
});
