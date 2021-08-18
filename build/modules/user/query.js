"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLogin = userLogin;
exports.user = user;
exports.usersByOrganization = usersByOrganization;
exports.userAuthResponse = userAuthResponse;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _env = require("../../setup/config/env");

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _utils = require("../../setup/helpers/utils");

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _model = _interopRequireDefault(require("./model"));

// Imports
// App Imports
// Login
function userLogin(_x) {
  return _userLogin.apply(this, arguments);
} // Get by ID


function _userLogin() {
  _userLogin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var _ref$params, email, password, rules, response, _user2, passwordMatch;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$params = _ref.params, email = _ref$params.email, password = _ref$params.password;
            // Validation rules
            rules = [{
              data: {
                value: email
              },
              check: 'email',
              message: 'Please enter valid email.'
            }, {
              data: {
                value: password,
                length: _params["default"].user.rules.passwordMinLength
              },
              check: 'lengthMin',
              message: "Please enter valid password. Minimum ".concat(_params["default"].user.rules.passwordMinLength, " is required.")
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
            response = {
              success: true,
              message: 'You have been logged in successfully.'
            };
            _context.next = 13;
            return _model["default"].findOne({
              email: email
            });

          case 13:
            _user2 = _context.sent;

            if (_user2) {
              _context.next = 19;
              break;
            }

            // User does not exists
            response.success = false;
            response.message = "We do not have any user registered with ".concat(email, " email address. Please signup.");
            _context.next = 23;
            break;

          case 19:
            _context.next = 21;
            return _bcrypt["default"].compare(password, _user2.password);

          case 21:
            passwordMatch = _context.sent;

            if (!passwordMatch) {
              // Incorrect password
              response.success = false;
              response.message = "Sorry, the password you entered is incorrect. Please try again.";
            } else {
              response.data = userAuthResponse(_user2);
            }

          case 23:
            return _context.abrupt("return", response);

          case 26:
            _context.prev = 26;
            _context.t1 = _context["catch"](9);
            throw new Error(_params["default"].common.message.error.server);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 6], [9, 26]]);
  }));
  return _userLogin.apply(this, arguments);
}

function user(_x2) {
  return _user.apply(this, arguments);
} // Get by organization


function _user() {
  _user = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var id, rules, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = _ref2.params.id;
            // Validation rules
            rules = [{
              data: {
                value: id
              },
              check: 'notEmpty',
              message: _params["default"].common.message.error.invalidData
            }]; // Validate

            _context2.prev = 2;
            (0, _validation["default"])(rules);
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](2);
            throw new Error(_context2.t0.message);

          case 9:
            if (!(0, _utils.authCheck)(auth)) {
              _context2.next = 20;
              break;
            }

            _context2.prev = 10;
            _context2.next = 13;
            return _model["default"].findOne({
              _id: id
            });

          case 13:
            data = _context2.sent;
            return _context2.abrupt("return", {
              data: data
            });

          case 17:
            _context2.prev = 17;
            _context2.t1 = _context2["catch"](10);
            throw new Error(_params["default"].common.message.error.server);

          case 20:
            throw new Error(_params["default"].user.message.error.auth);

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 6], [10, 17]]);
  }));
  return _user.apply(this, arguments);
}

function usersByOrganization(_x3) {
  return _usersByOrganization.apply(this, arguments);
} // Auth Response (token and user info)


function _usersByOrganization() {
  _usersByOrganization = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref3) {
    var fields, auth, data;
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
              organizationId: auth.user.organizationId
            }).select(fields);

          case 5:
            data = _context3.sent;
            return _context3.abrupt("return", {
              data: data
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
  return _usersByOrganization.apply(this, arguments);
}

function userAuthResponse(_ref4) {
  var _id = _ref4._id,
      organizationId = _ref4.organizationId,
      name = _ref4.name,
      email = _ref4.email,
      role = _ref4.role,
      demo = _ref4.demo;
  return {
    token: _jsonwebtoken["default"].sign({
      id: _id
    }, _env.SECURITY_SECRET),
    user: {
      _id: _id,
      organizationId: organizationId,
      name: name,
      email: email,
      role: role,
      demo: demo
    }
  };
}
//# sourceMappingURL=query.js.map