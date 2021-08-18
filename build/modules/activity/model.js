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

var _model5 = require("../interview/model");

var _model6 = require("../user/model");

var _model7 = require("../invite/model");

var _model8 = require("../job/model");

var _model9 = require("../kanban/model");

// Imports
// App Imports
// Collection name
var collection = 'Activities'; // Schema

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
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _model6.collection
  },
  candidateId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _model3.collection
  },
  interviewerId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _model4.collection
  },
  interviewId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _model5.collection
  },
  inviteId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _model7.collection
  },
  jobId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _model8.collection
  },
  kanbanId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _model9.collection
  },
  action: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true
}); // Model

var _default = _mongoose["default"].model(collection, Schema, collection);

exports["default"] = _default;
//# sourceMappingURL=model.js.map