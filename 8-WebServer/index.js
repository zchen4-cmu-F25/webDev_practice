var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
    console.log("Request received.");
    res.writeHead(200, {
        // text/plain, text/html, application/json
        // 用 JSONVue 插件可以在 Chrome 中直接查看 JSON 格式的数据
        "Content-Type": "application/json"
    });

    // var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
    // // res.end("Hello from Node.js!");
    // myReadStream.pipe(res);

    var obj = {
        name: "Chen Zixuan",
        age: 20,
        gender: "male"
    };
    res.end(JSON.stringify(obj));
});

server.listen(3000, "127.0.0.1");
console.log("Server started at Port 3000.");
