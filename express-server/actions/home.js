module.exports = function homeAction(req,res,next){
	//return homepage html
	res.send('<html><head><link rel="stylesheet" href="style.css"></head><body><h1>Hello World!</h1></body></html>');
}