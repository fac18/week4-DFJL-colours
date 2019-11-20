const http = require("http");
const path = require("path");
const port = 1234;
const router = require("./router.js");

const server = http.createServer(router);
server.listen(port, () => {
  console.log(`server up and running on localhost:${port}`);
});
