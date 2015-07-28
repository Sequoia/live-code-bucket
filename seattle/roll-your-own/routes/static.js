var fs = require('fs');
var path = require('path');
module.exports = function staticHandler(url, cb){
  var filePath = path.join(process.cwd(),url.pathname);
  console.log(filePath);
  var options = { 'encoding' : 'utf8' };
  fs.readFile(filePath, options, function(err, contents){
    if(err){
      console.log(err);
      cb(err); //pass back up to router with error
      return;
    }
    cb(null, {body: contents });
  });
};

