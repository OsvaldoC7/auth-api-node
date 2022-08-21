"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _classroom = require("../controllers/classroom.controller");

var _authJws = require("../middlewares/authJws");

var router = (0, _express.Router)();
router.post('/', _authJws.verifyToken, _classroom.createClassroom);
router.get('/', _classroom.getClassrooms);
router.get('/:id', _classroom.getClassroom);
router.put('/:id', _authJws.verifyToken, _classroom.updateClassroom);
router["delete"]('/:id', _authJws.verifyToken, _classroom.deleteClassroom);
var _default = router;
exports["default"] = _default;