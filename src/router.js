const handlers = require("./handlers.js");

const router = (request, response) => {
  const url = request.url;
  console.log(url);
  if (url === "/") {
    handlers.handlerHome(request, response);
  } else if (url.includes("public")) {
    handlers.handlerPublic(request, response, url);
  } else if (url.includes("search/")) {
    console.log("querystring is:", url);
    // handler here
  } else {
    response.writeHead(404); //if anything else is typed show a 404 message
    response.end("404 not found");
  }
};

module.exports = router;
