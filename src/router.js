const handlers = require("./handlers.js");

const router = (request, response) => {
  const url = request.url;
  if (url === "/") {
    handlers.handlerHome(request, response);
  } else if (url.indexOf("public") !== -1) {
    handlers.handlerPublic(request, response, url);
  } else {
    response.writeHead(404); //if anything else is typed show a 404 message
    response.end("404 not found");
  }
};

module.exports = router;
