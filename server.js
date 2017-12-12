var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(req, res) {
  res.end("It works!!! Path hit: " + req.url);
}

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

server.listen(PORT1, function() {
  console.log("You are a winner");
});

server2.listen(PORT2, function() {
  console.log("You are a loser");
});
