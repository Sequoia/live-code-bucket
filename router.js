module.exports = {
  '/echo' : function(req, res){
    console.log('someone called the echo route');
    res.write('You called: ' + req.url);

  },
  '/' : function(req, res){
    res.write('<h1>hello world!!</h1>');
  }
};
