"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.collection = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _model = require("../user/model");

var _model2 = require("../organization/model");

// Imports
// Collection name
var collection = 'Invite'; // Schema

exports.collection = collection;
var Schema = new _mongoose["default"].Schema({
  organizationId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _model2.collection,
    index: true
  },
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _model.collection
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  accepted: {
    type: Boolean,
    required: true,
    "default": false
  }
}, {
  timestamps: true
}); // Model

var _default = _mongoose["default"].model(collection, Schema, collection);

exports["default"] = _default;
//# sourceMappingURL=model.js.map