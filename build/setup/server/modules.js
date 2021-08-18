"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _user = _interopRequireDefault(require("../../modules/user"));

var _organization = _interopRequireDefault(require("../../modules/organization"));

var _project = _interopRequireDefault(require("../../modules/project"));

var _activity = _interopRequireDefault(require("../../modules/activity"));

var _candidate = _interopRequireDefault(require("../../modules/candidate"));

var _interviewer = _interopRequireDefault(require("../../modules/interviewer"));

var _job = _interopRequireDefault(require("../../modules/job"));

var _kanban = _interopRequireDefault(require("../../modules/kanban"));

var _interview = _interopRequireDefault(require("../../modules/interview"));

var _feedback = _interopRequireDefault(require("../../modules/feedback"));

var _invite = _interopRequireDefault(require("../../modules/invite"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Modules
var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _user["default"]), _organization["default"]), _project["default"]), _activity["default"]), _candidate["default"]), _interviewer["default"]), _job["default"]), _kanban["default"]), _interview["default"]), _feedback["default"]), _invite["default"]);

exports["default"] = _default;
//# sourceMappingURL=modules.js.map