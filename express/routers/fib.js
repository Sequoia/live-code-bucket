var express    = require('express');
var router     = express.Router();
var fib        = require('../../mymath').fib;

///setup the router
router.get('/:iters?', function(req, res, next){
  console.log('FIB ROUTER!!');
  var defaultIters = 10;
  var iters = parseInt(req.params.iters) || defaultIters;
  var result = fib(iters);
  res.json({
    iterations: iters,
    result : result
  });
});

module.exports = router;
