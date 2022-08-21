"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClassroom = exports.getClassrooms = exports.getClassroom = exports.deleteClassroom = exports.createClassroom = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Classroom = _interopRequireDefault(require("../models/Classroom"));

var createClassroom = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, room, buildingId, newClassroom, classroom;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, room = _req$body.room, buildingId = _req$body.buildingId;
            newClassroom = new _Classroom["default"]({
              room: room,
              buildingId: buildingId
            });
            _context.next = 5;
            return newClassroom.save();

          case 5:
            classroom = _context.sent;
            res.status(201).json(classroom);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            res.status(500).json(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function createClassroom(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createClassroom = createClassroom;

var getClassroom = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var classroom;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Classroom["default"].findById(req.params.id);

          case 3:
            classroom = _context2.sent;
            res.status(200).json(classroom);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getClassroom(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getClassroom = getClassroom;

var getClassrooms = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var classrooms, total;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Classroom["default"].find();

          case 3:
            classrooms = _context3.sent;
            _context3.next = 6;
            return _Classroom["default"].find().countDocuments();

          case 6:
            total = _context3.sent;
            res.status(200).json({
              result: classrooms,
              total: total
            });
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json(_context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function getClassrooms(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getClassrooms = getClassrooms;

var updateClassroom = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var classroom;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Classroom["default"].findByIdAndUpdate(req.params.id, req.body, {
              "new": true
            });

          case 3:
            classroom = _context4.sent;
            res.status(200).json(classroom);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function updateClassroom(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateClassroom = updateClassroom;

var deleteClassroom = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var classroom;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Classroom["default"].findByIdAndDelete(req.params.id);

          case 3:
            classroom = _context5.sent;
            res.status(200).json(classroom);
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json(_context5.t0);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function deleteClassroom(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteClassroom = deleteClassroom;