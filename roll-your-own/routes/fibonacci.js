var fib = require('./../myfib.js');

module.exports = function fibonacciHandler(url, cb){
  results = {
    body : {result : fib(10)}
  };
  process.nextTick(function(){
    cb(null, results);
  });
};
