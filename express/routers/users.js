var express    = require('express');
var router     = express.Router();
var User       = require('../lib/userModel');

router.get('/', function allUsers(req, res, next) {
  User.find(function(err,users){
    if(err){
      next(err);
      return;
    }
    if(!req.xhr){ //render html
      var usersWithIds = users.map(function(user, index){
        user.id = index;
        return user;
      });
      console.log(usersWithIds);
      res.render('users',{ users: usersWithIds});
    }else{ //send json
      res.json(users);
    }
  });
});

router.get('/:id', function userById(req, res, next) {
  console.log('user %d requested', req.params.id);
  var user = User.findById(req.params.id,function(err,user){
    if(err){ console.error(err); next(err); return; }
    if(!req.xhr){ //render html
      res.render('user',user);
    }else{ //send json
      res.json(user);
    }
  });
});

router.post('/', function createUser (req, res, next){
  //create a user
  console.log('new user', req.body);
  var user = new User(req.body);
  user.save(function(err, user){
    console.log('user saved');
    if(err){ console.error(err); next(err); return; }
    res.redirect('/users/' + user._id);
  });
});

router.delete('/:id', function deleteUser(req, res){
  var id = parseInt(req.params.id);
  if(isNaN(id)){
    res.status(400).json({message: 'bad user id'});
    return;
  }
  users.splice(id, 1);
  res.json({message : 'success'});
});

module.exports = router;
