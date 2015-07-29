var express = require('express');
var bodyParser = require('body-parser');
var myApp = express();
var fib = require('./lib/myFib');

myApp.set('views', 'templates');
myApp.set('view engine', 'jade');

myApp.use(express.static('static'));
myApp.use(bodyParser.urlencoded({ extended: false }));

myApp.use(function randomlyThrowErrors(req, res, next){
  if(Math.random() > 0.6){
    var error = new Error('random error!!');
    error.code = "ERANDOM";
    next(error);
  }else{
    next();
  }
});

myApp.use(function randomErrHandler(err, req, res, next){
  //log error message
  if(err.code === "ERANDOM"){
    res.set('X-error-message', 'random error');
    console.error('random error alert!!');
  }
  //continue
  next();
});

myApp.get('/', function handleRoot(req, res, next){
  res.send('Hello Werld');
});

myApp.get('/fibonacci/:iterations?', function(req, res){
  var iters = req.params.iterations || 10;
  res.json({iterations: iters, result : fib(iters)});
});

myApp.use('/user', require('./userRouter'));

myApp.use(function(req, res, next){
  res.status(404);
  // default to plain-text. send()
  res.type('txt').send('Not found!!');
  //optionally: sendfile static/404.html
});

myApp.use(function uncaughtErrorHandler(err, req, res, next){
  res.type('txt').send(err.message);
});

myApp.listen(8080);
