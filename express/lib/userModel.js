var mongoose = require('mongoose');
var mongouri = process.env.MONGOURI;
if(!mongouri){
  console.error('please set MONGOURI env. var');
  process.exit(1);
}
console.log(mongouri);
mongoose.connect(mongouri);
var db = mongoose.connection;

db.on('open',function(err){
  if(err){
    console.error(err);
    return;
  }
  console.log('MONGO CONNECTION SUCCESS');
});
db.on('err',function(e){
  console.error(e);
});

//create a schema
var userSchema  = new mongoose.Schema({
  first: String,
  last : String
});

//create a model with that schema
var User = mongoose.model('User', userSchema);
//export our model
module.exports = User;
