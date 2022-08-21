"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

_mongoose["default"].connect(_config["default"].MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true // useFindAndModify: true,
  // useCreateIndex: true

}).then(function (db) {
  return console.log('Database is connected!');
})["catch"](function (error) {
  return console.log(error);
});