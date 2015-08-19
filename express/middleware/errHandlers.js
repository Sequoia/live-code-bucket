var router = require('express').Router();

router.use('/',function logErorr(req, res, next){
  res.send('here');
});

router.use(function logErorr(err, req, res, next){
  console.error(err);
  res.send('there was an error');
});

module.exports = router;
