module.exports = function homeAction(req,res,next){
	//return homepage html
	res.render('index',{
		title: 'Hello Werld',
		homepageText: 'we all love StrongLoop!'
	})
}