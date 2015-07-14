var fib  = require('./lib/fibonacci');
var url  = require('url');

var routes = {
	'/' : function(){
		return "<h1>Hello world</h1><p>welcome to my homepage</p>";
	},
	'/fib' : function(query){
		var iterations = Number(query.iterations);
    	return {result: fib(iterations)};
	}
};

/**
* @param Http.IncomingMessage
* @param function callback(err, content, ctype)
*/
module.exports = function route(req, cb){

	var parsed = url.parse(req.url,true);

    if (routes[parsed.pathname]) {
        process.nextTick(function() {
        	var results = routes[parsed.pathname]( parsed.query );
            cb(null, results);
        });
    } else {
    	var err = new Error('not found');
    	err.code = 404;
    	process.nextTick(cb.bind(null,err));
    	//^^ alternative to function(){ cb(err) };
    	//--> use "bind" to return new function that will always run in same context
    }
}