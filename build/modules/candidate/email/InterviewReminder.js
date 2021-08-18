"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

// Imports
// Component
var InterviewReminder = function InterviewReminder(_ref) {
  var candidateName = _ref.candidateName,
      date = _ref.date,
      organizationName = _ref.organizationName,
      mode = _ref.mode,
      note = _ref.note,
      userName = _ref.userName;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "Hi ", candidateName, ","), /*#__PURE__*/_react["default"].createElement("p", null, "This is a reminder for your interview on ", /*#__PURE__*/_react["default"].createElement("u", null, date), ". ", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("strong", null, "Interview Mode:"), " ", mode, note && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      whiteSpace: 'pre-wrap'
    }
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "Note:"), " ", note))), /*#__PURE__*/_react["default"].createElement("p", null, "Feel free to reply to this email for any assistance."), /*#__PURE__*/_react["default"].createElement("p", null, "Thanks, ", /*#__PURE__*/_react["default"].createElement("br", null), userName));
}; // Component Properties


InterviewReminder.propTypes = {
  candidateName: _propTypes["default"].string.isRequired,
  userName: _propTypes["default"].string.isRequired,
  date: _propTypes["default"].string.isRequired,
  organizationName: _propTypes["default"].string.isRequired
};
var _default = InterviewReminder;
exports["default"] = _default;
//# sourceMappingURL=InterviewReminder.js.map