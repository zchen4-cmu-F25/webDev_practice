var fs = require("fs");
var data = require("./data.js");

// "/" & "/home"
function home(response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(__dirname + "/home.html").pipe(response);
}

// "/user"
function user(response) {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(data));
}

function list(response, params) {
    response.writeHead(200, {"Content-Type": "application/json"});
    // var note = ["Dave", "Jen", "Matt"];
    response.end(JSON.stringify(params));
}

module.exports = {
    home: home,
    user: user,
    list: list,
};
