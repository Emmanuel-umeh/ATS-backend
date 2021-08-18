"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.collection = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _model = require("../organization/model");

// Imports
// App Imports
// Collection name
var collection = 'Feedback'; // Schema

exports.collection = collection;
var Schema = new _mongoose["default"].Schema({
  organizationId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: _model.collection,
    index: true
  },
  interviewId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: 'Interview'
  },
  text: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
}, {
  timestamps: true
}); // Model

var _default = _mongoose["default"].model(collection, Schema, collection);

exports["default"] = _default;
//# sourceMappingURL=model.js.map