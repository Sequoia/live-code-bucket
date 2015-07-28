var fib  = require('./lib/fibonacci');
var url  = require('url');
var fs   = require('fs');
var mime = require('mime');
var path = require('path');

var routes = {
	'/' : function(){
        return '<html><head><link rel="stylesheet" href="style.css"></head><body><h1>Hello World!</h1></body></html>';
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
        fs.readFile(
            path.join(__dirname, 'public', parsed.pathname),
            { encoding: 'utf8' }, //FIXME this will probably break on images
            function(fileErr, data) {
                if (fileErr) {
                    
                    err = new Error('Not Found');
                    err.code = 404;
                    return cb(err);
                    
                } else {
                    var mimetype = mime.lookup(path.join(__dirname, 'public', parsed.pathname));
                    cb(null, data, mimetype);
                    
                }
            }
        );
    }

}