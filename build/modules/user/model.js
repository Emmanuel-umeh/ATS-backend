"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.collection = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _model = require("../organization/model");

// Imports
// App Imports
// Collection name
var collection = 'User'; // Schema

exports.collection = collection;
var Schema = new _mongoose["default"].Schema({
  organizationId: {
    type: String,
    required: true,
    ref: _model.collection,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    "default": _params["default"].user.roles.user.key
  },
  admin: {
    type: Boolean,
    required: true,
    "default": false
  },
  demo: {
    type: Boolean,
    required: true,
    "default": true
  }
}, {
  timestamps: true
}); // Model

var _default = _mongoose["default"].model(collection, Schema, collection);

exports["default"] = _default;
//# sourceMappingURL=model.js.map