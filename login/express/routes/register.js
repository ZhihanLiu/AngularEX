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
   console.log("ssss");
   res.json("woca");
});

module.exports = router;