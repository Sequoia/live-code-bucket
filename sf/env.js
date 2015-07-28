
if(process.env.NODE_ENV ==='debug'){
	console.log('debug!');
}

if(process.env.NODE_ENV ==='production'){
	console.log('don\'t output debug stuff!');
}