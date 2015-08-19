var express    = require('express');
var router     = express.Router();

var users = [
  { first : 'sequoia', last : 'mcdowell' },
  { first : 'ty', last : 'cobb' },
  { first : 'taylor', last : 'swift' }
];

router.get('/', function allUsers(req, res, next) {
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

router.get('/:id', function userById(req, res, next) {
  var id = parseInt(req.params.id);
  if(id > users.length -1){
    console.error(id, users.length -1);
    var e = new Error('User not found');
    e.code = 404;
    next(e);
  }
  var user = users[id];
  console.log('user %d requested', id);

  if(!req.xhr){ //render html
    user.id = id;
    res.render('user',user);
  }else{ //send json
    res.json(user);
  }
});

router.post('/', function createUser (req, res, next){
  //create a user
  console.log('new user', req.body);
  users.push(req.body);
  res.redirect('/users/' + (users.length - 1));
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
