var assert = require('assert');
/**
 * @param {Number} number of iterations
 */
function fib(iter){
  if(iter <=2){
    return 1;
  }
  return fib(iter - 1) + fib(iter -2);
}

assert(fib(10) === 55, "fib 55");
assert(fib(11) === 89, "fib 89???");
