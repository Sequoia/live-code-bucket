var http = require('http');
var requestHandler = require('./requestHandler');
var cluster = require('cluster');

if (cluster.isMaster) {
    
	console.log('master with pid %d started', process.pid)	

    cluster.fork();
    cluster.fork();
    
    cluster.on('exit', function() {
        console.log('a worker died...');
        cluster.fork();
    });
    
} else {
	var port = Number(process.argv[2]) || 1337;

	var server = http.createServer(requestHandler);

	server.listen(port, '127.0.0.1', function() {
		console.log('cluster pid %d started', cluster.worker.process.pid)
	    console.log('Server running at http://127.0.0.1:%d/',port);
	});
}