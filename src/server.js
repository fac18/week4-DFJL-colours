const fs = require("fs");
const http = require("http");
const path = require("path");
const port = 1234;

const handler = (request, response) => {
  const url = request.url;
  if (url === "/") {
    const filePath = path.join(__dirname, "..", "public", "index.html");

    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        response.writeHead(500, { "Content-Type": "text/html" });
        respone.end("<h1>Sorry we had a problem on our end</h1>");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(file);
      }
    });
  }
};

const server = http.createServer(handler);
server.listen(port, () => {
  console.log(`server up and running on localhost:${port}`);
});
