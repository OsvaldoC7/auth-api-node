"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var classroomSchema = new _mongoose.Schema({
  room: String,
  buildingId: Number
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Classroom', classroomSchema);

exports["default"] = _default;