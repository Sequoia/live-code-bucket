//mather.js
var mymath = require('./mymath');
var chalk = require('chalk');

var styles = {
	fib : chalk.bold.red,
	add : chalk.underline.blue
};

// console.log(chalk);
//{fib : fn, add: fn}

var operation = process.argv[2];

//don't name a var this!!
// var arguments = process.argv.slice(3); //get arguments from shell
var args = process.argv.slice(3); //get arguments from shell

var result = mymath[operation].apply(null, args);

console.log(styles[operation](result));