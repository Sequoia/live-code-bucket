userActions = require('./actions/user');

module.exports = {
	'home' 			: require('./actions/home'),
	'fibonacci' 	: require('./actions/fibonacci'),
	'createUser'	: userActions.create,
	'getUser'		: userActions.getOne,
	'userForm'		: userActions.userForm,
};