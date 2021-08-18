"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invite = invite;
exports.invitesByOrganization = invitesByOrganization;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _utils = require("../../setup/helpers/utils");

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _model = _interopRequireDefault(require("./model"));

// App Imports
// Get by id
function invite(_x) {
  return _invite.apply(this, arguments);
} // Get by organization


function _invite() {
  _invite = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var id, rules, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.params.id;
            // Validation rules
            rules = [{
              data: {
                value: id
              },
              check: 'notEmpty',
              message: _params["default"].common.message.error.invalidData
            }]; // Validate

            _context.prev = 2;
            (0, _validation["default"])(rules);
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](2);
            throw new Error(_context.t0.message);

          case 9:
            _context.prev = 9;
            _context.next = 12;
            return _model["default"].findOne({
              _id: id,
              accepted: false
            }).populate('organizationId');

          case 12:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data
            });

          case 16:
            _context.prev = 16;
            _context.t1 = _context["catch"](9);
            throw new Error(_params["default"].common.message.error.server);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 6], [9, 16]]);
  }));
  return _invite.apply(this, arguments);
}

function invitesByOrganization(_x2) {
  return _invitesByOrganization.apply(this, arguments);
}

function _invitesByOrganization() {
  _invitesByOrganization = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var auth, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            auth = _ref2.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context2.next = 12;
              break;
            }

            _context2.prev = 2;
            _context2.next = 5;
            return _model["default"].find({
              organizationId: auth.user.organizationId,
              accepted: false
            });

          case 5:
            data = _context2.sent;
            return _context2.abrupt("return", {
              data: data
            });

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            throw new Error(_params["default"].common.message.error.server);

          case 12:
            throw new Error(_params["default"].user.message.error.auth);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));
  return _invitesByOrganization.apply(this, arguments);
}
//# sourceMappingURL=query.js.map