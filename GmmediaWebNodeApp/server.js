/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();
var port = process.env.port || 1337;

// all environments
app.set('port', port);
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function () {

  console.log('Express server listening on port ' + app.get('port'));
}); 
