var fib = require('./fib');
var mathjs = require('mathjs');

module.exports = {
  fib : fib,
  add : function(a,b){return a+b;},
  sub : mathjs.sub,
  pow : Math.pow
};
