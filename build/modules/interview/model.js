"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.collection = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _model = require("../organization/model");

var _model2 = require("../project/model");

var _model3 = require("../candidate/model");

var _model4 = require("../interviewer/model");

var _model5 = require("../feedback/model");

var _model6 = require("../user/model");

// Imports
// App Imports
// Collection name
var collection = 'Interview'; // Schema

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
  candidateId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: _model3.collection
  },
  interviewerId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: _model4.collection
  },
  feedbackId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _model5.collection
  },
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: _model6.collection
  },
  dateTime: {
    type: String,
    "default": new Date()
  },
  mode: {
    type: String,
    required: true
  },
  note: {
    type: String
  }
}, {
  timestamps: true
}); // Model

var _default = _mongoose["default"].model(collection, Schema, collection);

exports["default"] = _default;
//# sourceMappingURL=model.js.map