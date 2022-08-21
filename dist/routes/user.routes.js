"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = require("../controllers/user.controller");

var _authJws = require("../middlewares/authJws");

var _verifySignup = require("../middlewares/verifySignup");

var router = (0, _express.Router)();
router.post('/', [_verifySignup.checkRolesExisted]);
router.get('/', [_authJws.verifyToken, _authJws.isStudent], _user.getUsers);
router.get('/:id', _authJws.verifyToken, _user.getUser);
router.put('/:id', _authJws.verifyToken, _user.updateUser);
router["delete"]('/:id');
var _default = router;
exports["default"] = _default;