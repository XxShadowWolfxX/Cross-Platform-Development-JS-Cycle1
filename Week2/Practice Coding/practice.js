var http = require("http");
var movies = require("./movies.json");

var server = http.createServer(function(req, res){
	res.writeHead(200);
	res.write("Hello world!");
	res.end();
});

server.listen(8080);
console.log("Server is running");