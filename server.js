var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080

// pages
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/pages/services', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/services.html'));
});

app.get('/pages/tammy', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/tammy.html'));
});

app.get('/pages/beth', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/beth.html'));
});

app.get('/pages/sofia', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/sofia.html'));
});

app.get('/pages/jackie', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/jackie.html'));
});

app.get('/pages/sheila', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/sheila.html'));
});

app.get('/pages/tessa', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/tessa.html'));
});

//serve static files
app.use('/public',express.static(__dirname + '/public'));

//port and server
var PORT = 8080;
console.log("now serving on PORT: ", PORT)

app.listen(PORT);