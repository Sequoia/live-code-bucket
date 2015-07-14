var http = require('http');
var requestHandler = require('./requestHandler');
//SPOILER ALERT!!
var port = Number(process.argv[2]) || 1337;

var server = http.createServer(requestHandler);

server.listen(port, '127.0.0.1', function() {
    console.log('Server running at http://127.0.0.1:%d/',port);
});