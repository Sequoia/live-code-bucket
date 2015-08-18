var http = require('http');
var router = require('./router.js');
var serveStatic = require('./static.js');

var server = http.createServer();
var port   = 3030;

server.on('request', handleRequest);

function handleRequest(req, res){
  if(router[req.url]){
    console.log('we found a route');
    res.writeHead(200, {
      'content-type' : 'text/html',
      'x-powered-by' : 'Sequoia.js',
      'x-date'       : new Date()
    });
    router[req.url](req, res);
    res.end();
  }else{
    serveStatic(req, res);
  }
}

server.listen(port, function(){
    console.log('server listening on %d', port);
});
