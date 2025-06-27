// Entry
var server = require("./server.js");
var handler = require("./handler.js");
var route = require("./router.js");

var handle = {};
handle["/"] = handler.home;
handle["/home"] = handler.home;
handle["/user"] = handler.user;
handle["/list"] = handler.list;

server.startServer(route, handle);
