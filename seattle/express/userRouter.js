var express = require('express');
var router = express.Router();

var lastId= 0;
var users = [];

router.get('/',function userForm(req, res, next){
  res.render('userForm');
});

router.post('/', function createUser(req, res, next) {
  //1. 
  //add user object to users array
  //{id : ++lastId, name: 'username'}
  users.push({
    id: ++lastId,
    name: req.body.username
  });
  res.redirect('./all');
});

//2. add route for /users that returns list of all users as id: username
//(text/plain, text/html)
router.get('/all', function getAllUsers(req,res){
  res.render('users', {userArray: users});
});

module.exports = router;
