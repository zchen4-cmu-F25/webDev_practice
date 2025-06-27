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

function list(response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    var note = ["Dave", "Jen", "Matt"];
    response.end(note.join(", "));
}

module.exports = {
    home: home,
    user: user,
    list: list,
};
