'use strict';

var axon = require('axon');
var socket = axon.socket('sub');

socket.connect(8001);

socket.on('err', function (err) {
  throw err;
});

module.exports = socket;
