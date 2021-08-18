"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inviteToOrganization = inviteToOrganization;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _utils = require("../../setup/helpers/utils");

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _model = _interopRequireDefault(require("../organization/model"));

var _model2 = _interopRequireDefault(require("../activity/model"));

var _model3 = _interopRequireDefault(require("../invite/model"));

var _send = require("../email/send");

var _Invite = _interopRequireDefault(require("./email/Invite"));

// Imports
// App Imports
// Email
// Create invite to organization
function inviteToOrganization(_x) {
  return _inviteToOrganization.apply(this, arguments);
}

function _inviteToOrganization() {
  _inviteToOrganization = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var _ref$params, name, email, auth, rules, invited, invite, organization;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$params = _ref.params, name = _ref$params.name, email = _ref$params.email, auth = _ref.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context.next = 35;
              break;
            }

            // Validation rules
            rules = [{
              data: {
                value: name
              },
              check: 'notEmpty',
              message: 'Please enter valid name.'
            }, {
              data: {
                value: email
              },
              check: 'email',
              message: 'Please enter valid email.'
            }]; // Validate

            _context.prev = 3;
            (0, _validation["default"])(rules);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](3);
            throw new Error(_context.t0.message);

          case 10:
            _context.prev = 10;
            _context.next = 13;
            return _model3["default"].findOne({
              email: email
            });

          case 13:
            invited = _context.sent;

            if (invited) {
              _context.next = 29;
              break;
            }

            _context.next = 17;
            return _model3["default"].create({
              organizationId: auth.user.organizationId,
              userId: auth.user._id,
              email: email,
              name: name,
              accepted: false
            });

          case 17:
            invite = _context.sent;
            _context.next = 20;
            return _model["default"].findOne({
              _id: auth.user.organizationId
            });

          case 20:
            organization = _context.sent;
            _context.next = 23;
            return (0, _send.send)({
              to: {
                name: name,
                email: email
              },
              from: auth.user,
              subject: 'You have been invited!',
              template: /*#__PURE__*/_react["default"].createElement(_Invite["default"], {
                invitedTo: name,
                invitedBy: auth.user.name,
                invitedCode: invite._id,
                organizationName: organization.name
              }),
              organizationId: auth.user.organizationId,
              userId: auth.user._id
            });

          case 23:
            if (!invite) {
              _context.next = 26;
              break;
            }

            _context.next = 26;
            return _model2["default"].create({
              organizationId: auth.user.organizationId,
              userId: auth.user._id,
              inviteId: invite._id,
              action: _params["default"].activity.types.create,
              message: "".concat(auth.user.name, " invited ").concat(name, " (").concat(email, ") to the organization.")
            });

          case 26:
            return _context.abrupt("return", {
              data: invite
            });

          case 29:
            throw new Error("The email ".concat(email, " is already invited. Please ask the user to accept the invitation."));

          case 30:
            _context.next = 35;
            break;

          case 32:
            _context.prev = 32;
            _context.t1 = _context["catch"](10);
            throw new Error(_params["default"].common.message.error.server);

          case 35:
            throw new Error(_params["default"].user.message.error.auth);

          case 36:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 7], [10, 32]]);
  }));
  return _inviteToOrganization.apply(this, arguments);
}
//# sourceMappingURL=mutation.js.map