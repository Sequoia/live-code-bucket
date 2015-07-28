'use strict';

function fib2(iters){
  var results = [];
  //first iters
  if(results.length === 0){
    results.unshift(0);
    iters--;
    results.unshift(1);
    iters--;
  }
  while(iters >= 0){
    results.unshift(results[0] + results[1]);
    //console.log(results[0]);
    iters--;
  }
  return results[0];
}

module.exports = fib2;
