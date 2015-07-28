'use strict';
var http = require('http');
var handler = require('./router');
var port = process.env.PORT || 3737;

http
  .createServer(handler)
  .listen(port, '127.0.0.1', function onStart(){
    console.log('server started on ' + port);
  });
