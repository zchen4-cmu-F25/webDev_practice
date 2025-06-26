var http = require("http");
var url = require("url");
var querystring = require("querystring");

function startServer(route, handle) {
    var server = http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        var data = [];

        request.on("error", function(err) {
            console.log(err);
        }).on("data", function(chunk) {
            data.push(chunk);
        }).on("end", function() {
            if(request.method == "POST") {
                data = Buffer.concat(data).toString();
                console.log("POST data: ", querystring.parse(data));
                route(handle, pathname, response, querystring.parse(data));
            } else {
                var params = url.parse(request.url, true).query; // true for object, false for string
                console.log("GET data: ", params);
                route(handle, pathname, response, params);
            }
        }); 
    });

    server.listen(3000, "127.0.0.1");
    console.log("Server has started at port 3000.");
}

module.exports = {
    startServer: startServer
}