"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _package = _interopRequireDefault(require("../package.json"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _classroom = _interopRequireDefault(require("./routes/classroom.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _role = _interopRequireDefault(require("./routes/role.routes"));

var _initialSetup = require("./libs/initialSetup");

var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
app.set('pkg', _package["default"]);
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
});
app.use('/auth', _auth["default"]);
app.use('/classroom', _classroom["default"]);
app.use('/user', _user["default"]);
app.use('/role', _role["default"]);
var _default = app;
exports["default"] = _default;