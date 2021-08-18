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
var AccountCreatedOrVerified = function AccountCreatedOrVerified(_ref) {
  var to = _ref.to,
      message = _ref.message;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("p", null, "Hi ", to, ","), /*#__PURE__*/_react["default"].createElement("p", null, message), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: _env.WEB_URL + _params["default"].web.routes.dashboard
  }, "OPEN DASHBOARD")), /*#__PURE__*/_react["default"].createElement("p", null, "What's next? ", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("ol", null, /*#__PURE__*/_react["default"].createElement("li", null, "Start inviting your teammates"), /*#__PURE__*/_react["default"].createElement("li", null, "Add your projects and candidates"), /*#__PURE__*/_react["default"].createElement("li", null, "Schedule interviews and track progress"), /*#__PURE__*/_react["default"].createElement("li", null, "Receive feedback from interviewers"))), /*#__PURE__*/_react["default"].createElement("p", null, "Thanks, ", /*#__PURE__*/_react["default"].createElement("br", null), _params["default"].site.name));
}; // Component Properties


AccountCreatedOrVerified.propTypes = {
  to: _propTypes["default"].string.isRequired,
  message: _propTypes["default"].string.isRequired
};
var _default = AccountCreatedOrVerified;
exports["default"] = _default;
//# sourceMappingURL=AccountCreatedOrVerified.js.map