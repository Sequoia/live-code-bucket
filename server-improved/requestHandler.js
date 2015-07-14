var router = require('./router');

module.exports = function handleRequest(req, res) {
    var results;
    console.log('request to ', req.url);

    results = router(req);

    if(!results){ //err
    	res.writeHead(404);
    	res.end('not found');
    	return;
    }

    res.writeHead(200, {
        'Content-Type': results.ctype
    });
    res.end(results.content);
};