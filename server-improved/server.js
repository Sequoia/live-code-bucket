var http = require('http');
var fib  = require('./lib/fibonacci');
var url  = require('url');
//SPOILER ALERT!!
var port = Number(process.argv[2]) || 1337;

var routes = {
	'/' : function(req){
		return {
			content  : "<h1>Hello world</h1><p>welcome to my homepage</p>",
			ctype    : "text/html"
		};
	},
	'/fib' : function(req){
		var parsed = url.parse(req.url,true);
		var iterations = Number(parsed.query.iterations);
    	return{
    		content : JSON.stringify({result: fib(iterations)}),
    		ctype   : 'application/json'
    	}
	}
}

var server = http.createServer(function (req, res) {
    var parsed = url.parse(req.url,true);
    var results;
    console.log('request to ', parsed.pathname, parsed.query);

    if(!routes[parsed.pathname]){ //no such route, 404 & return
    	res.writeHead(404);
    	res.end('not found');
    	return;
    }

    results = routes[parsed.pathname](req);
    res.writeHead(200, {
        'Content-Type': results.ctype
    });
    res.end(results.content);
    
});

server.listen(port, '127.0.0.1', function() {
    console.log('Server running at http://127.0.0.1:%d/',port);
});
