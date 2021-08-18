"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _params = _interopRequireDefault(require("../../../setup/config/params"));

// Imports
// App Imports
// Component
var Invite = function Invite(_ref) {
  var code = _ref.code;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("p", null, "Hi there,"), /*#__PURE__*/_react["default"].createElement("p", null, "Please use the following verification code: ", /*#__PURE__*/_react["default"].createElement("br", null), "Code: ", /*#__PURE__*/_react["default"].createElement("strong", null, code)), /*#__PURE__*/_react["default"].createElement("p", null, "Thanks, ", /*#__PURE__*/_react["default"].createElement("br", null), _params["default"].site.name));
}; // Component Properties


Invite.propTypes = {
  code: _propTypes["default"].number.isRequired
};
var _default = Invite;
exports["default"] = _default;
//# sourceMappingURL=Verify.js.map