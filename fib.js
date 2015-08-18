var mathjs = require('mathjs');
/**
 * @param {Number} number of iterations
 */
module.exports = function fib(iter){
  if(iter <=2){
    return 1;
  }
  return mathjs.add(fib(iter - 1), fib(iter -2));
};
