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
 
  user.findOne({username:req.body.user,password:req.body.password}, function(err,docs){
   
          if(err){
            next(createError(500));
          
          }
          else{
            if(docs == null || docs.length< 1 ){
              res.send("-1");
            }
            else{
              console.log(docs);
              res.json({user:docs.username});
            }
          }
          
  });
});

module.exports = router;