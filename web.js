var express = require('express');
var filename = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = filename.readFile('index.html');
  var str = buffer.toString();
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
