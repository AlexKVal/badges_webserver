'use strict';

var express = require('express');
var app = express();

// we use socket.io
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var subscribeSocket = require('./lib/subscribe');

var port = 3000;
server.listen(port, function () {
  console.log('Server is listening on port %d', port);
});

/**
 * Server static assets out of public
 */
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendfile('./public/index.html');
});

io.socket.on('connection', function (socket) {

});

subscribeSocket.on('message', function (message) {
  io.socket.emit('badge', message);
});
