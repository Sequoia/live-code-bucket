var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();
var expressWs = require('express-ws')(app);
app.use(express.static('public'));

app.ws('/sock', function(ws, req) {
  ws.on('message', function(msg) {
    console.log(msg);
  });
  console.log('socket', req.testing);
});

app.listen(1337);