//app.js
var myApp  = require('express')();
var routes = require('./routes');
var bodyParser = require('body-parser');

//normally you'd save/get users from a database,
//not an array attached to app :p
myApp.set('users',[]);

// Parse POST form data...
myApp.use( bodyParser.urlencoded({ extended: false }) );

myApp.get('/', routes.home);
myApp.get('/fib', routes.fibonacci);
//user stuff
myApp.post('/user', routes.createUser);
myApp.get('/user/:id', routes.getUser);
myApp.get('/user', routes.userForm);

myApp.listen(8080);