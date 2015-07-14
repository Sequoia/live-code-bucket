var router = require('./router');
var defaultErrorCode = 500;

module.exports = function handleRequest(req, res) {
    var results;
    console.log('request to ', req.url);

    router(req, handleResult);

    function handleResult(err, content, ctype){    

        if (err) {            
            res.writeHead(err.code || defaultErrorCode, {
                'Content-Type': 'text/plain'
            });
            res.end(err.message || 'Server Error');
        } else {
            if (!ctype && typeof content === 'string') {
                ctype = 'text/html';
            } else if (!ctype) {
                ctype = 'application/json';
                content = JSON.stringify(content);
            }
            
            res.writeHead(200, {
                'Content-Type': ctype
            });
            res.end(content);
        }
    }
};