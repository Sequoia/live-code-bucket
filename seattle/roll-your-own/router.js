parse = require('url').parse;
module.exports = handleRequest;

var defaults = {
  code : '200',
  contentType: 'text/plain'
};

var fourohfourhandler = require('./routes/404.js');
var routes = {
  '/' : require('./routes/default.js'),
  '/fibonacci': require('./routes/fibonacci.js')
};

function handleRequest(req, res) {
  var url = parse(req.url);
  var action;

  //lookup action
  if(routes[url.pathname]){
    action = routes[url.pathname];
  }else if(false/*check if pathname starts with static*/){
    //@todo add static file routing
    //action = require('routes/static.js');
  } else{
    action = fourohfourhandler;
  }
  callRoute(req, res, url, action);
}

function callRoute(req,res,url,routeFn){

  console.log('serving ' + routeFn.name + ' for ' + url.pathname);
  return routeFn(url,function(err, result){
    //handle results, send response 
    if(err){
      res.end(500, "something went wrong...");
      return;
    }

    //set headers
    var headers = {};
    if(typeof result.body === 'object'){
      headers['Content-Type'] = 'application/json';
      results.body = JSON.stringify(results.body);
    }else{
      headers['Content-Type'] = result.contentType || defaults.contentType;
    }
    //use their code or default
    res.writeHead(result.code || defaults.code, headers);

    res.end(results.body);
    return;
  });
}
