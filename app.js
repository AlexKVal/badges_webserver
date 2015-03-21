'use strict';

var express = require('express');
var app = express();

/**
 * Server static assets out of public
 */
app.use(express.static('public'));

var port = 3000;
app.listen(port, function () {
  console.log('Server is listening on port %d', port);
});
