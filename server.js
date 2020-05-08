var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080

// pages
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/services', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/services.html'));
});

app.get('/tammy', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/tammy.html'));
});

app.get('/beth', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/beth.html'));
});

app.get('/sofia', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/sofia.html'));
});

app.get('/jackie', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/jackie.html'));
});

app.get('/shelia', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/shelia.html'));
});

app.get('/tessa', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/tessa.html'));
});

//serve static files
app.use('/public',express.static(__dirname + '/public'));

//port and server
var PORT = 8080;
console.log("now serving on PORT: ", PORT)

app.listen(PORT);