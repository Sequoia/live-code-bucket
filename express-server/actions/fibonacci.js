var fib  = require('../lib/fibonacci');
module.exports = function fibAction(req,res,next){
	var iterations = Number(req.query.iterations);
	res.send({result: fib(iterations)})
}
