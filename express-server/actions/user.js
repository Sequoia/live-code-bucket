module.exports = {};

module.exports.create = function createUser(req,res){
	var newUser = req.body; //{name:"foobar"}
	var users = req.app.get('users');

	var userId = users.length + 1; //increment
	newUser.id = userId; //{name:"foobar",id:1}

	users.push(newUser);		//add it to the collection/array
	console.log('saving user:', newUser);

	req.app.set('users',users); //"save" it back to the users array on app
	console.log('new user list:' + req.app.get('users'));
	res.redirect('/user/' + newUser.id);
};

module.exports.getOne = function getUser(req,res){
	var userId = req.params.id;
	
	var users = req.app.get('users');

	var user = users[userId-1];
	console.log('retrieving user %d', userId);

	res.send('<ul><li>Username: ' + user.name + '</li><li>ID:' + user.id + '</li></ul>');
};

module.exports.userForm = function userForm(req,res){
	res.send('<html><head></head><body><h1>Create User</h1><form action="/user" method="post"><label>name:<input type="text" name="name"/><br><button>Submit</button></form></body></html>');
};