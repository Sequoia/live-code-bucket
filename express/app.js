/* jshint node: true */
// in app.js
'use strict';

var express    = require('express');
var bodyParser = require('body-parser');
var randomW    = require('random-words');
var path       = require('path');
var myApp      = express();

require('./config')(myApp);

var staticPath = path.join(__dirname, '..', 'public');
/////CONFIGURATION///////

var users = [
  { first : 'sequoia', last : 'mcdowell' },
  { first : 'ty', last : 'cobb' },
  { first : 'taylor', last : 'swift' }
];

myApp.use(express.static(staticPath));

myApp.use(bodyParser.urlencoded({extended : false}));
myApp.use(function(req,res,next){
  req.foo = randomW();
  console.log('we matched our middleware!!');
  next();
});
myApp.use(function setPoweredBy(req,res,next){
  res.set('x-Powered-By', 'Denver.js');
  next();
});

myApp.use('/', require('./routers/root'));
myApp.use('/fib', require('./routers/fib'));
myApp.use('/users', require('./routers/users'));

//No routes were matched :(
myApp.use(function notFoundRoute(req,res,next){
  var e = new Error('Not found');
  e.code = 404;
  next(e);
});

///// ERROR HANDLERS /////
myApp.use(function logErorr(err, req, res, next){
  console.error(err);
  next(err);
})
.use(function handle504(err, req, res, next){
  if(err.code !== 504){
    next(err);
    return;
  }
  res.json({message: err.message, code: err.code, extra : req.foo});
})
.use(function handle404(err, req, res, next){
  if(err.code !== 404){
    next(err);
    return;
  }
  res.json({message: err.message, code: err.code});
})

.use(function catchallHandler(err, req, res, next){
  res.json({message: err.message, code: 5000, extra : req.foo});
});

myApp.listen(8080, function(){
  console.log('server started on port 8080');
});
