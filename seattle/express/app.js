var express = require('express');
var bodyParser = require('body-parser');
var myApp = express();
var fib = require('./lib/myFib');

var lastId= 0;
var users = [];

myApp.use(express.static('static'));
myApp.use(bodyParser.urlencoded({ extended: false }));

myApp.get('/', function handleRoot(req, res, next){
  res.send('Hello Werld');
});

myApp.get('/fibonacci/:iterations?', function(req, res){
  var iters = req.params.iterations || 10;
  res.json({iterations: iters, result : fib(iters)});
});

myApp.get('/user',function userForm(req, res, next){
  res.send('<form method=POST><label>Username: <input type=text name=username /></label><button>create user</button></form>');
});

myApp.post('/user', function createUser(req, res, next) {
  //1. 
  //add user object to users array
  //{id : ++lastId, name: 'username'}
  users.push({
    id: ++lastId,
    name: req.body.username
  });
  res.redirect('/users');
});

//2. add route for /users that returns list of all users as id: username
//(text/plain, text/html)
myApp.get('/users', function getAllUsers(req,res){
  var output = '';
  output +='<h1>Users:</h1>';
  output +='<table>';
  output +='<tr><th>id</th><th>name</th></tr>';
  users.forEach(function(user){
    output +='<tr><td>'+user.id+'</td><td>'+user.name+'</td></tr>';
  });
  output +='</table>';
  output +='<h2>create another user:</h2>';
  output +='<form method=POST action="/user"><label>Username: <input type=text name=username /></label><button>create user</button></form>';
  res.end(output);
});

myApp.listen(8080);
