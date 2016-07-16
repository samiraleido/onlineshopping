var express = require('express');
var app = express();

var mongojs = require('mongojs');
var database = mongojs('eidosoft_db_admin:notpass@ds055862.mlab.com:55862/eidosoft_db?authMechanism=SCRAM-SHA-1', ['Products']);

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(process.env.NODE_PORT || 3000);