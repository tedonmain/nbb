var http = require("http");
var url = require("url");

function start(route, handle, port) {
  function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received...");

    route(handle, pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    let content = route(handle, pathname);
    response.write(content);
    response.end();
  }
  
  http.createServer(onRequest).listen(port);
  console.log("Server has started");
}

exports.start = start;

