var http = require("http");
var data = require('./data.json');
var fs = require('fs');

function startServer() {
    var server = http.createServer(function(request, response) {
        console.log(request.url);
        if (request.url === "/" || request.url === "/home") {
            response.writeHead(200, {"Content-Type": "text/html"});
            fs.createReadStream(__dirname + "/home.html", "utf8").pipe(response);
        } else if (request.url === "/api/user") {
            response.writeHead(200, {"Content-Type": "application/json"});
            response.end(JSON.stringify(data));
        } else {
            response.writeHead(404, {"Content-Type": "text/html"});
            fs.createReadStream(__dirname + "/404.html", "utf8").pipe(response);
        }
    });

    server.listen(3000, "127.0.0.1");
    console.log("Server started at Port 3000.");
}

module.exports = {
    startServer: startServer
};
