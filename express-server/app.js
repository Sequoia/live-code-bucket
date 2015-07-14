//app.js
var express  = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');

var myApp = express();

//normally you'd save/get users from a database,
//not an array attached to app :p
myApp.set('users',[]);

// Parse POST form data...
myApp.use( bodyParser.urlencoded({ extended: false }) );


	//userRouter.js
	var userRouter   = express.Router();
	//user stuff
	userRouter.post('/',    routes.createUser);
	userRouter.get( '/:id', routes.getUser);
	userRouter.get( '/',    routes.userForm);
	//module.export = userRouter;

myApp.use('/user', userRouter);

myApp.get('/', routes.home);
myApp.get('/fib', routes.fibonacci);

myApp.listen(8080);