"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.collection = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _model = require("../organization/model");

var _model2 = require("../project/model");

var _model3 = require("../user/model");

// Imports
// App Imports
// Collection name
var collection = 'Job'; // Schema

exports.collection = collection;
var Schema = new _mongoose["default"].Schema({
  organizationId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: _model.collection,
    index: true
  },
  projectId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: _model2.collection,
    index: true
  },
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: _model3.collection
  },
  role: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}, {
  timestamps: true
}); // Model

var _default = _mongoose["default"].model(collection, Schema, collection);

exports["default"] = _default;
//# sourceMappingURL=model.js.map