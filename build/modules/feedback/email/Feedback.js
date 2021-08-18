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
var Feedback = function Feedback(_ref) {
  var interview = _ref.interview,
      text = _ref.text,
      status = _ref.status;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "Hi ", interview.userId.name, ","), /*#__PURE__*/_react["default"].createElement("p", null, "A feedback was received for ", interview.candidateId.name, " given by ", interview.interviewerId.name, "."), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Interview Mode:"), " ", interview.mode, " ", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("strong", null, "Status:"), " ", status, " ", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("strong", null, "Feedback:"), " ", text), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: _env.WEB_URL + _params["default"].web.routes.dashboard
  }, "OPEN DASHBOARD")), /*#__PURE__*/_react["default"].createElement("p", null, "Thanks, ", /*#__PURE__*/_react["default"].createElement("br", null), _params["default"].site.name));
}; // Component Properties


Feedback.propTypes = {
  interview: _propTypes["default"].object.isRequired
};
var _default = Feedback;
exports["default"] = _default;
//# sourceMappingURL=Feedback.js.map