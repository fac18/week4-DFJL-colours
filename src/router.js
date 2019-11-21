const handlers = require("./handlers.js");

const router = (request, response) => {
  const url = request.url;
  console.log(url);
  console.log("elseif:", url.includes("public"));
  if (url === "/") {
    handlers.handlerHome(request, response);
  } else if (url.indexOf("public") !== -1) {
    handlers.handlerPublic(request, response, url);
  } else if (url == "/search") {
    console.log('"/search" endpoint is being routed');
    // handler here
  } else {
    response.writeHead(404); //if anything else is typed show a 404 message
    response.end("404 not found");
  }
};

module.exports = router;
