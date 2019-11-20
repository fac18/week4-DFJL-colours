const http = require("http");
const path = require("path");
const port = 1234;

const handlers = require("./handlers.js");

const server = http.createServer(handlers);
server.listen(port, () => {
  console.log(`server up and running on localhost:${port}`);
});
