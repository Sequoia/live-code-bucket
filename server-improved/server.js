var http = require('http');
//SPOILER ALERT!!
//take port as first argument or default to 1337
var port = Number(process.argv[2]) || 1337;

var server = http.createServer(function (req, res) {
    //if path '/': return "<h1>Hello world</h1><p>welcome to my homepage</p>"
    //if the path is '/fib':
    	//get 'iterations' from query string, pass to fib module
    	// domain:port/fib?iterations=10 -->
    	//return result thus: { result: 55 };
    console.log('request to ', req.url);
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World\n');
    
});

server.listen(port, '127.0.0.1', function() {
    console.log('Server running at http://127.0.0.1:%d/',port);
});
