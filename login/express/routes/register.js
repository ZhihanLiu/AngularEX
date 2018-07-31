var express = require('express');
var router = express.Router();
var path = require('path');
var user = require('../model/db_user');
var createError = require('http-errors');
var db = require('../model/db');



router.get('/', function(req, res, next) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public')});
  });
/* GET users listing. */
router.post('/', function(req, res, next) {

   user.findOne({$or:[{username:req.body.username},{email:req.body.email}]}, (err,data)=>{
     console.log(req);
    console.log(data);
     if(err) next();
     if(data != null  ){
      console.log('1');
        res.send( {message:"The username or email has been signed up!"});
     }
     else{
      console.log('2');
       var newUser = new user({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
       });
       newUser.save((err, data) =>{
          if(err) next();
          else{
            res.send({message:"Signed Up Complete"});
          }
       }       );
       
     }
             
   });

});

module.exports = router;