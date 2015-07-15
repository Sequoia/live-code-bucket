module.exports = function(Review) {
	Review.validate('rating', ratingCheck,{
		message : "that is not a valid rating!!!!"
	});
};

function ratingCheck(errCallback) {
    if (this.rating > 5 || this.rating < 1) {
        errCallback();
    }
}