"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _env = require("../../../setup/config/env");

var _params = _interopRequireDefault(require("../../../setup/config/params"));

// Imports
// App Imports
// Component
var InterviewInvite = function InterviewInvite(_ref) {
  var interviewId = _ref.interviewId,
      interviewerName = _ref.interviewerName,
      candidateId = _ref.candidateId,
      candidateName = _ref.candidateName,
      date = _ref.date,
      organizationName = _ref.organizationName,
      mode = _ref.mode,
      note = _ref.note,
      userName = _ref.userName;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "Hi ", interviewerName, ","), /*#__PURE__*/_react["default"].createElement("p", null, "This is an invitation to conduct ", candidateName, "'s interview on ", /*#__PURE__*/_react["default"].createElement("u", null, date), " for ", organizationName, ". ", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("strong", null, "Interview Mode:"), " ", mode, note && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      whiteSpace: 'pre-wrap'
    }
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "Note:"), " ", note))), /*#__PURE__*/_react["default"].createElement("p", null, "Candidate's resume: ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "".concat(_env.API_URL, "/download/").concat(candidateId)
  }, "DOWNLOAD")), /*#__PURE__*/_react["default"].createElement("p", null, "After conducting the interview, please provide your feedback for ", candidateName, " by using following link: ", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("a", {
    href: "".concat(_env.WEB_URL + _params["default"].web.routes.feedback, "/").concat(interviewId)
  }, "GIVE FEEDBACK")), /*#__PURE__*/_react["default"].createElement("p", null, "Feel free to reply to this email for any assistance."), /*#__PURE__*/_react["default"].createElement("p", null, "Thanks, ", /*#__PURE__*/_react["default"].createElement("br", null), userName));
}; // Component Properties


InterviewInvite.propTypes = {
  interviewerName: _propTypes["default"].string.isRequired,
  candidateName: _propTypes["default"].string.isRequired,
  userName: _propTypes["default"].string.isRequired,
  date: _propTypes["default"].string.isRequired,
  organizationName: _propTypes["default"].string.isRequired
};
var _default = InterviewInvite;
exports["default"] = _default;
//# sourceMappingURL=InterviewInvite.js.map