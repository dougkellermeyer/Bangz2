var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/public',express.static(__dirname + '/public'));

var PORT = 8080;
console.log("now serving on PORT: ", PORT)

app.listen(PORT);