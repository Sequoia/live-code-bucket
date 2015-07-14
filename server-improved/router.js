var fib  = require('./lib/fibonacci');
var url  = require('url');

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
};

module.exports = function route(req){
	var parsed = url.parse(req.url,true);
    return routes[parsed.pathname](req);
}