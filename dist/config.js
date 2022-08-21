"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  SECRET: 'modular_api',
  MONGODB_URI: process.env.MONGODB_URI
};
exports["default"] = _default;