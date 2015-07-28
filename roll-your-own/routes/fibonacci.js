var fib = require('./../myfib.js');

module.exports = function defaultHandler(url, cb){
  results = {
    body : {result : fib(10)}
  };
  process.nextTick(function(){
    cb(null, results);
  });
};
