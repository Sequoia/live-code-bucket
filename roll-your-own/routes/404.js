//(url,function(err, result){
module.exports = function errorHandler(url, cb){
  results = {
    body : '<h1>Oops!</h1><p>We couldn\'t find that; try again!</p>',
    code : 404,
    contentType: 'text/html'
  };
  process.nextTick(function(){
    cb(null, results);
  });
};
