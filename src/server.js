const http = require("http");
const path = require("path");
const router = require("./router.js");
const PORT = process.env.PORT || 1234;

const server = http.createServer(router);
server.listen(PORT, () => {
  PORT === 1234
    ? console.log(`server up and running on localhost:${PORT}`)
    : console.log(`server up and running on heroku site`);
});
