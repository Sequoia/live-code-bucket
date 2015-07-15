module.exports = function(CoffeeShop) {
	CoffeeShop.validatesPresenceOf('name');

	CoffeeShop.validatesLengthOf('name',{
	    min: 5,
	    max: 50,
	    message: {
	        min: 'Name is too short',
	        max: 'Name is too long'
	    }
	});
};
