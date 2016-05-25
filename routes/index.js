var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Drawing = require('../models/Drawing');

var storeDrawing = require('./storeDrawing');
var listDrawings = require('./listDrawings');
var drawStored = require('./drawStored');

/***********************************************
* Template for new routes                      *
*router.get('/routeName', functionName);       *
*router.post('/routeName', functionName);      *
* when you have both post and get              *
*router.use('/routeName', functionName);       *
***********************************************/
router.post('/store', storeDrawing);
router.get('/test',function(req,res){
  console.log(req.body);
  res.send(200);
});
router.post('/test',function(req,res){
  console.log(req.body);
  res.send(200);
});
router.get('/list', listDrawings);
router.post('drawStored', drawStored);
router.get('/deleteAll', function(req,res){
  Drawing.find({}, function (err, docs) {
    docs.remove(); //Remove all the documents that match!
  });
});

module.exports = router;
