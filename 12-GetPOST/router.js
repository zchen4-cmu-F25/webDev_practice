var fs = require("fs");

function route(handle, pathname, response, params) {
    if (typeof handle[pathname] === "function") {
        return handle[pathname](response, params);
    } else {
        // 404
        response.writeHead(404, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname + "/404.html", "utf8").pipe(response);
    }
}

module.exports = route;
