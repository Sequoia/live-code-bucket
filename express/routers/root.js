var express    = require('express');
var router     = express.Router();

///setup the router

router.get('/', function handleRoot(req, res, next) {
  console.log('word>>>>>>%s', req.foo);
  //if(Math.random() > 0.5){
  if(true){
    var e = new Error('Something RaNdOm happened!!');
    e.code = 504;
    next(e);
    return;
  }
  res.send('Hello World!');
});


module.exports = router;
