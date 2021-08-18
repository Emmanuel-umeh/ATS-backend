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

var _model4 = require("../job/model");

// Imports
// App Imports
// Collection name
var collection = 'Candidate'; // Schema

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
    ref: _model2.collection,
    index: true
  },
  jobId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _model4.collection
  },
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: _model3.collection
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  resume: {
    type: String,
    required: true
  },
  salaryCurrent: {
    type: String
  },
  salaryExpected: {
    type: String
  }
}, {
  timestamps: true
}); // Model

var _default = _mongoose["default"].model(collection, Schema, collection);

exports["default"] = _default;
//# sourceMappingURL=model.js.map