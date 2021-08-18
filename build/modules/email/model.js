"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.collection = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _model = require("../organization/model");

var _model2 = require("../user/model");

// Imports
// App Imports
// Collection name
var collection = 'Email'; // Schema

exports.collection = collection;
var Schema = new _mongoose["default"].Schema({
  organizationId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _model.collection,
    index: true
  },
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _model2.collection
  },
  toName: {
    type: String
  },
  toEmail: {
    type: String,
    required: true
  },
  fromName: {
    type: String,
    required: true
  },
  fromEmail: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, {
  timestamps: true
}); // Model

var _default = _mongoose["default"].model(collection, Schema, collection);

exports["default"] = _default;
//# sourceMappingURL=model.js.map