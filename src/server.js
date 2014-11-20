// A basic server that listens on port 1337
// and manages requests to fetch links from 
// a page

var express = require('express');
var host = 'localhost';
var port = 1337;

var app = express.createServer();

app.get('/', function(request, response) {
    response.render('index.ejs', {title: 'All is fine and dandy'});
});

app.post('/fetch', function(request, response) {
    response.send('<h1>Work in progress!</h1>');

});

app.get('/*', function(request, response) {
    response.render('error.ejs', {title: 'Uh oh, something went awry'});
});

app.listen(port, host);
