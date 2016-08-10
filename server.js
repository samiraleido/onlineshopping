var server_port = 5000;
var db_conn_str = 'mongodb://eidosoft_db_admin:notpass@ds055862.mlab.com:55862/eidosoft_db';

var express = require('express');
var mongojs = require('mongojs');
var fs = require('fs');

var db = mongojs(db_conn_str);
var products = db.collection('Products');
var categories = db.collection('ProductsCategories');

var app = express();

app.use('/', express.static(__dirname + '/public'));

app.get('/products', function(req, res){
    products.find(function(err, docs) {
        res.send(docs);
    });
});

app.get('/categories', function(req, res){
    categories.find(function(err, docs) {
        res.send(docs);
    });
});

app.get('/product/:id', function(req, res) {
    products.findOne({ 'productId': req.params.id}, function(err, docs) {
        res.send(docs);
    });
});

app.post('/', function (req, res) {
  res.send('POST request to homepage');
});
app.post('/product', function(req, res) {
    products.insert({ 'productId': req.params.id}, function(err, docs) {
        res.send(docs);
    });
});

app.get('/category/:id', function(req, res) {
    products.find({ 'category': req.params.id}, function(err, docs) {
        res.send(docs);
    });
});

app.listen(server_port);