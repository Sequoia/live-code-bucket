var express = require('express');
var myApp = express();
var fib = require('./lib/myFib');

//Hint : google "static routing middleware"!!
//http://expressjs.com/guide/using-middleware.html
//Hint 2: it won't look likle "myApp.get('/static',..."
myApp.use(express.static('static'));
myApp.get('/', function handleRoot(req, res, next){
  res.send('Hello Werld');
});

myApp.get('/fibonacci/:iterations?', function(req, res){
  var iters = req.params.iterations || 10;
  res.json({iterations: iters, result : fib(iters)});
});
//extra credit: allow user to set # iterations in path
//hint: console.log(req) & inspect it
//docs: http://expressjs.com/api.html#req
//myApp.get('/fibonacci/:iterations', function(req, res){});

myApp.listen(8080);

//expressjs.com
//  guide
//  API
