var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'test',
  user     : 'root'
});

connection.connect();

function lookupUserHander(userid, cb){
  connection.query('SELECT * from foo', function(err, rows, fields) {
    if (err) throw err;

    
    console.log('The solution is: ', rows[0]);
  });
}


function lookeuphandler(req,res){
  lookupUserHandler(req.userid, function(err, data){
    res.end(data);
  });
}

connection.end();
