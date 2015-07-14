//mymath.js
var fibonacci = require('./fibonacci');
var _add_internal = function(x, y){
	return parseInt(x)+parseInt(y);
}

module.exports = {
	fib : fibonacci,
	add : _add_internal
}