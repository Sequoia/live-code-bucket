//app.js
var myApp = require('express')();

myApp.get('/',function handleRoot(req,res,next){
	//return homepage html
	res.send('Hello World!');
});

//fib route (reads iterations from query)

myApp.listen(8080);