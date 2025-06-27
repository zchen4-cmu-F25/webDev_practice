var http = require("http");

function startServer(route, handle) {
    var server = http.createServer(function(request, response) {
        route(handle, request.url, response)
    });

    server.listen(3000, "127.0.0.1");
    console.log("Server has started at port 3000.");
}

module.exports = {
    startServer: startServer
}