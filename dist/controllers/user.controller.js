"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.getUsers = exports.getUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

// export const createUser = async (req, res) => {
//   const { email, password, name, udgCode, roles } = req.body
// }
var getUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var users, total;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _User["default"].find().populate('roles').populate('roles');

          case 3:
            users = _context.sent;
            _context.next = 6;
            return _User["default"].find().countDocuments();

          case 6:
            total = _context.sent;
            res.status(200).json({
              result: users,
              total: total
            });
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500).json(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var getUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _User["default"].findById(req.params.id).populate('roles');

          case 3:
            user = _context2.sent;

            if (user) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: 'User not found'
            }));

          case 6:
            res.status(200).json(user);
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function getUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUser = getUser;

var updateUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _User["default"].findByIdAndUpdate(req.params.id, req.body, {
              "new": true
            });

          case 3:
            user = _context3.sent;
            res.status(200).json(user);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function updateUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;