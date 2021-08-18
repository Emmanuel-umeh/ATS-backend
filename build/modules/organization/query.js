"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.organization = organization;
exports.organizationByUser = organizationByUser;
exports.organizationsByUser = organizationsByUser;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _utils = require("../../setup/helpers/utils");

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _model = _interopRequireDefault(require("./model"));

// App Imports
// Get by ID
function organization(_x) {
  return _organization.apply(this, arguments);
} // Get by user


function _organization() {
  _organization = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var id, auth, rules, _organization2;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.params.id, auth = _ref.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context.next = 14;
              break;
            }

            // Validation rules
            rules = [{
              data: {
                value: id
              },
              check: 'notEmpty',
              message: _params["default"].common.message.error.invalidData
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
            _context.next = 12;
            return _model["default"].findOne({
              _id: id
            });

          case 12:
            _organization2 = _context.sent;
            return _context.abrupt("return", {
              data: _organization2
            });

          case 14:
            throw new Error(_params["default"].user.message.error.auth);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 7]]);
  }));
  return _organization.apply(this, arguments);
}

function organizationByUser(_x2) {
  return _organizationByUser.apply(this, arguments);
} // Get all


function _organizationByUser() {
  _organizationByUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var fields, auth, _organization3;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            fields = _ref2.fields, auth = _ref2.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context2.next = 12;
              break;
            }

            _context2.prev = 2;
            _context2.next = 5;
            return _model["default"].findOne({
              _id: auth.user.organizationId
            }).select(fields);

          case 5:
            _organization3 = _context2.sent;
            return _context2.abrupt("return", {
              data: _organization3
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
  return _organizationByUser.apply(this, arguments);
}

function organizationsByUser(_x3) {
  return _organizationsByUser.apply(this, arguments);
}

function _organizationsByUser() {
  _organizationsByUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref3) {
    var fields, auth, organizations;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            fields = _ref3.fields, auth = _ref3.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context3.next = 12;
              break;
            }

            _context3.prev = 2;
            _context3.next = 5;
            return _model["default"].find({
              userId: auth.user._id
            }).select(fields);

          case 5:
            organizations = _context3.sent;
            return _context3.abrupt("return", {
              data: organizations
            });

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](2);
            throw new Error(_params["default"].common.message.error.server);

          case 12:
            throw new Error(_params["default"].user.message.error.auth);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 9]]);
  }));
  return _organizationsByUser.apply(this, arguments);
}
//# sourceMappingURL=query.js.map