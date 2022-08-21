"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = exports.signIn = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var signUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, password, name, udgCode, roles, userFound, newUser, foundRoles, role, user, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, email = _req$body.email, password = _req$body.password, name = _req$body.name, udgCode = _req$body.udgCode, roles = _req$body.roles;
            _context.next = 4;
            return _User["default"].findOne({
              email: email
            });

          case 4:
            userFound = _context.sent;

            if (!userFound) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              message: 'User already exists'
            }));

          case 7:
            _context.t0 = _User["default"];
            _context.t1 = email;
            _context.next = 11;
            return _User["default"].encryptPassword(password);

          case 11:
            _context.t2 = _context.sent;
            _context.t3 = name;
            _context.t4 = udgCode;
            _context.t5 = {
              email: _context.t1,
              password: _context.t2,
              name: _context.t3,
              udgCode: _context.t4
            };
            newUser = new _context.t0(_context.t5);

            if (!roles) {
              _context.next = 23;
              break;
            }

            _context.next = 19;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });

          case 19:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 27;
            break;

          case 23:
            _context.next = 25;
            return _Role["default"].findOne({
              name: 'user'
            });

          case 25:
            role = _context.sent;
            newUser.roles = [role._id];

          case 27:
            _context.next = 29;
            return newUser.save();

          case 29:
            user = _context.sent;
            token = _jsonwebtoken["default"].sign({
              id: user._id
            }, _config["default"].SECRET, {
              expiresIn: 432000 // 5 dias en segundos

            });
            res.status(200).json({
              user: user,
              token: token
            });
            _context.next = 37;
            break;

          case 34:
            _context.prev = 34;
            _context.t6 = _context["catch"](0);
            res.status(500).json(_context.t6);

          case 37:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 34]]);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var signIn = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, email, password, userFound, matchPassword, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context2.next = 4;
            return _User["default"].findOne({
              email: email
            }).populate('roles');

          case 4:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: 'User not found'
            }));

          case 7:
            _context2.next = 9;
            return _User["default"].comparePassword(password, userFound.password);

          case 9:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: 'Invalid password'
            }));

          case 12:
            token = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, _config["default"].SECRET, {
              expiresIn: 432000
            });
            res.status(200).json({
              user: userFound,
              token: token
            });
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json(_context2.t0);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 16]]);
  }));

  return function signIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signIn = signIn;