var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

// var http = require('http');

// function handleRequest(request, response){
//     response.end('It Works!! Path Hit: ' + request.url);
// }

// var server = http.createServer(handleRequest);
 
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(server_port);

// server.listen(server_port, server_ip_address, function () {
//   console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
// });