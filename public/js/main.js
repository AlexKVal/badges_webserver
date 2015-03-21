/*globals $, io */
'use strict';

$(function () {
  var socket = io.connect();

  socket.on('badge', function (badge) {
    var $img = $('<img src="'+badge.badge_id+'" alt="Code School Badge">');
    $('.badge-wrapper').prepend($img);
    setTimeout(function(){
      img.addClass('on');
    }, 0);
  });
});
