"use strict";

var users = [];

var addUser = function addUser(_ref) {
  var id = _ref.id,
      name = _ref.name,
      room = _ref.room;
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  var existingUser = users.find(function (user) {
    return user.room;
  });
};

var removeUser = function removeUser() {};

var getUser = function getUser() {};

var getUsersInRoom = function getUsersInRoom() {};