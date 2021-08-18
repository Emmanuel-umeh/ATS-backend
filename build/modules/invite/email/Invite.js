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
var Invite = function Invite(_ref) {
  var invitedTo = _ref.invitedTo,
      invitedBy = _ref.invitedBy,
      invitedCode = _ref.invitedCode,
      organizationName = _ref.organizationName;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("p", null, "Hi ", invitedTo, ","), /*#__PURE__*/_react["default"].createElement("p", null, "I'm inviting you to join ", organizationName, " on HIRESMART, an application to streamline hiring process, scheduling interviews and tracking candidates."), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "".concat(_env.WEB_URL + _params["default"].web.routes.invite, "/").concat(invitedCode)
  }, "ACCEPT INVITATION")), /*#__PURE__*/_react["default"].createElement("p", null, "Thanks, ", /*#__PURE__*/_react["default"].createElement("br", null), invitedBy));
}; // Component Properties


Invite.propTypes = {
  invitedTo: _propTypes["default"].string.isRequired,
  invitedBy: _propTypes["default"].string.isRequired,
  organizationName: _propTypes["default"].string.isRequired
};
var _default = Invite;
exports["default"] = _default;
//# sourceMappingURL=Invite.js.map