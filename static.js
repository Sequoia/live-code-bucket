var fs = require('fs');
var path = require('path');
var mime = require('mime');
//Should be able to serve...
//file.txt, file.json, file.jpg, file.html

module.exports = function(req, res){
  var pathname = path.join(__dirname, 'public', req.url);
  console.log('file %s request', pathname);
  //try to read the file
  fs.readFile(pathname, function(err, data){
    if(err){
      //if there's an error, respond with 404
      res.statusCode = 404;
      res.statusMessage = err.message;
      res.end('not found :(');
      return;
    }
    //NO ERROR
      //write some headers
      var ct = mime.lookup(pathname);
      res.writeHead(200, {
        'content-type' : ct,
        'x-powered-by' : 'Sequoia.js',
        'x-date'       : new Date()
      });
      //respond with the file
      res.end(data);
  });
};
