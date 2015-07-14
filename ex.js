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
    	.then(dbLongOperationPromiser)
    	.then(somethingElse);
    result === 'undefined';
});


dbLongOperationPromiser
	.then()
	.catch()
	.finally(/*cleanup*/)
server.listen(3000, '127.0.0.1', function() {
    console.log('The server is up!');
});


//callback convention:
/**
* @param...
* @param...
* @param...
* @param {Function} callback with arguments ({Error}, {Object} data)
*/
function operation(x, y, z, ......, done){}

operation("ab",123,function done(err, data){

})

//create a promise

function dbLongOperationPromiser(foo, bar){
	return new Promise(function(resolve, reject){
		db.longOperation({id:123},function done(err, result){
			if(err){
				reject(err);
			}
			resolve(result);
		})
	})
}