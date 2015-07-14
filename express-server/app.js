//app.js
var myApp  = require('express')();
var routes = require('./routes');
// var routes = require('./routes.json');

// routes.forEach(function(route){
// 	myApp.get(route.route, require('./actions/' + route.action));
// });
myApp.get('/', routes.home);
myApp.get('/fib', routes.fibonacci);

var users = [];
myApp.post('/user', function createUser(req, res, next) {
    // Create the user record...

    // Where do we get the data from?

    res.redirect('/user');
});

myApp.get('/user', function getUser(req, res, next) {
	//output that user record
});

myApp.listen(8080);