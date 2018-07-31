var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var db = require('./db')
var userSchema = new Schema({
username: String,
password:String
},{ strict: false });

var user = mongoose.model('User', userSchema);

module.exports= 
    user
;