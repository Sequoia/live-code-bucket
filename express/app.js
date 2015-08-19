/* jshint node: true */
// in app.js
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var randomW = require('random-words');
var path = require('path');
var myApp = express();

var users = [
  { first : 'sequoia', last : 'mcdowell' },
  { first : 'ty', last : 'cobb' },
  { first : 'taylor', last : 'swift' }
];

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

myApp.get('/', function handleRoot(req, res, next) {
  console.log('word>>>>>>%s', req.foo);
  if(Math.random() > 0.5){
    var e = new Error('Something RaNdOm happened!!');
    e.code = 504;
    next(e);
    return;
  }
  res.send('Hello World!');
});

myApp.get('/userform', function handleroot(req, res, next) {
  res.sendFile(path.join(__dirname, './userform.html'));
});

myApp.get('/users', function handleroot(req, res, next) {
  res.json(users);
});

myApp.get('/users/:id', function handleRoot(req, res, next) {
  var id = parseInt(req.params.id);
  if(id > users.length -1){
    var e = new Error('Not found');
    e.code = 404;
    next(e);
  }
  console.log('user %d requested', id);
  res.json(users[id]);
});

myApp.post('/users', function createUser (req, res, next){
  //create a user
  console.log('new user', req.body);
  users.push(req.body);
  res.redirect('/users/' + (users.length - 1));
});

myApp.delete('/users/:id', function deleteUser(req, res){
  var id = parseInt(req.params.id);
  if(isNaN(id)){
    res.status(400).json({message: 'bad user id'});
    return;
  }
  users.splice(id, 1);
  res.json({message : 'success'});
});
//ouput success message ^
//

//No routes were matched :(
myApp.get(function notFoundRoute(req,res,next){
  var e = new Error('Not found');
  e.code = 404;
  next(e);
});

//notFoundHandler
//  ONLY operate on code =404
//  respond with json or redirect per your preference
//  pass error if not 404

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
.use(function catchallHandler(err, req, res, next){
  res.json({message: 'something bad', code: 5000, extra : req.foo});
});

myApp.listen(8080, function(){
  console.log('server started on port 8080');
});
