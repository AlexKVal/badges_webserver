'use strict';

var express = require('express');
var app = express();

// we use socket.io
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var subscribeSocket = require('./lib/subscribe');

var badges = require('./models/badges');

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

io.sockets.on('connection', function (socket) {
  badges.get(function (err, data) {
    if (err) return;
    data.forEach(function (badge) {
      socket.emit('badge', badge);
    });
  });
});

subscribeSocket.on('message', function (message) {
  io.sockets.emit('badge', message);
});
