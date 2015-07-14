var http = require('http');
var fib  = require('./lib/fibonacci');
var url  = require('url');
//SPOILER ALERT!!
var port = Number(process.argv[2]) || 1337;

var server = http.createServer(function (req, res) {
    var parsed = url.parse(req.url,true);
    console.log('request to ', parsed.pathname, parsed.query);
    res.writeHead(200, {
        'Content-Type': 'text/plain' //@TODO probably not right...
    });
    //if path '/': return "<h1>Hello world</h1><p>welcome to my homepage</p>"
    if(parsed.pathname === '/'){
    	res.end("<h1>Hello world</h1><p>welcome to my homepage</p>");
    }else if(parsed.pathname === '/fib'){
    	var iterations = Number(parsed.query.iterations);
    	res.end(JSON.stringify({result: fib(iterations)}));
    }
    //if the path is '/fib':
    	//get 'iterations' from query string, pass to fib module
    	// domain:port/fib?iterations=10 -->
    	//return result thus: { result: 55 };
    res.end('Hello World\n');
    
});

server.listen(port, '127.0.0.1', function() {
    console.log('Server running at http://127.0.0.1:%d/',port);
});
