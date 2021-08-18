"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

// Imports
// Schema
var Schema = new _mongoose["default"].Schema({}, {
  timestamps: true
}); // Model

var _default = _mongoose["default"].model('DemoUser', Schema, 'DemoUser');

exports["default"] = _default;
//# sourceMappingURL=model.js.map