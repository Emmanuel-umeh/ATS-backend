"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.collection = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _model = require("../user/model");

var _params = _interopRequireDefault(require("../../setup/config/params"));

// Imports
// App Imports
// Collection name
var collection = 'Verification'; // Schema

exports.collection = collection;
var Schema = new _mongoose["default"].Schema({
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _model.collection
  },
  email: {
    type: String,
    required: true
  },
  code: {
    type: Number,
    required: true
  },
  verified: {
    type: Boolean,
    required: true,
    "default": false
  },
  type: {
    type: String,
    required: true,
    "default": _params["default"].user.verification.signup
  }
}, {
  timestamps: true
}); // Model

var _default = _mongoose["default"].model(collection, Schema, collection);

exports["default"] = _default;
//# sourceMappingURL=model.js.map