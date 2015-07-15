//app.js
var express  = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');

var myApp = express();
// Parse POST form data...
myApp.use( bodyParser.urlencoded({ extended: false }) );
//templates
myApp.set('views','templates');
myApp.set('view engine','jade');

//normally you'd save/get users from a database,
//not an array attached to app :p
myApp.set('users',[]);

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