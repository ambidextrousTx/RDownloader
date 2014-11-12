// A basic server that listens on port 1337
// and manages requests to fetch links from 
// a page

var http = require('http');
var host = 'localhost';
var port = 1337;

var server = http.createServer(function(request, response) {
    console.log('Request received: ', request.url);
    if (request.url == '/test') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hold your horses, got your request!');
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('Sorry, this URL is not valid or not supported\n');
        response.end('Please try again.');
    }

});

server.listen(port, host, function() {
    console.log('Listening on port:', port);

});
