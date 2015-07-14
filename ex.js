// server.js
var http = require('http');

var server = http.createServer(function handleRequests(req, res) {
    //save to mongo
    //api call (http request to 3rd party server)
    //new record with ID: o43958234
    res.end('success');
    //push notif
    //respond
    request.getAsync() //return promise
    	.then(new Promise(function(resolve, reject){
    		resolve(4);
    	})
    	.then(function(){return "foo";})
    	.then(new Promise(function(resolve, reject){
    		resolve(function(){ return foo; })
    	})
    	.then(add1plus1)//
    	.then(promiser)
    result === 'undefined';
});

server.listen(3000, '127.0.0.1', function() {
    console.log('The server is up!');
});


function promiser(foo, bar){
	return new Promise(function(resolve, reject){
		doAsyncOp([foo, bar],function done(err, result){
			if(err){
				reject(err);
			}
			resolve(result);
		})
	})
}