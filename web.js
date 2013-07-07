var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var txt = new Buffer(24);

function readFileSync_encoding(filename, encoding) {
    var buffer = fs.readFileSync(filename);
    return buffer.toString('utf8');
}

app.get('/', function(request, response) {
  txt = readFileSync_encoding('index.html');
  response.send(txt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
