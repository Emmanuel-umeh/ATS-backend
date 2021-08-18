"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userStartNow = userStartNow;
exports.userVerifySendCode = userVerifySendCode;
exports.userVerifyCode = userVerifyCode;
exports.userVerifyUpdateAccount = userVerifyUpdateAccount;
exports.userAcceptInvite = userAcceptInvite;
exports.userUpdate = userUpdate;
exports.userResetPasswordSendCode = userResetPasswordSendCode;
exports.userResetPasswordVerifyCode = userResetPasswordVerifyCode;
exports.userResetPasswordUpdate = userResetPasswordUpdate;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _react = _interopRequireDefault(require("react"));

var _env = require("../../setup/config/env");

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _utils = require("../../setup/helpers/utils");

var _model = _interopRequireDefault(require("./model"));

var _query = require("./query");

var _send = require("../email/send");

var _model2 = _interopRequireDefault(require("../organization/model"));

var _model3 = _interopRequireDefault(require("../demo-user/model"));

var _model4 = _interopRequireDefault(require("../activity/model"));

var _model5 = _interopRequireDefault(require("../verification/model"));

var _Verify = _interopRequireDefault(require("./email/Verify"));

var _AccountCreatedOrVerified = _interopRequireDefault(require("./email/AccountCreatedOrVerified"));

var _model6 = _interopRequireDefault(require("../invite/model"));

// Imports
// App Imports
// Email
// Create a demo user and login
function userStartNow(_x) {
  return _userStartNow.apply(this, arguments);
} // Verify email send code


function _userStartNow() {
  _userStartNow = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var auth, organization, demoUser, passwordHashed, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            auth = _ref.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context.next = 5;
              break;
            }

            throw new Error("You are already logged in. Please go to your dashboard to continue.");

          case 5:
            _context.prev = 5;
            _context.next = 8;
            return _model2["default"].create({
              name: 'Demo Organization'
            });

          case 8:
            organization = _context.sent;
            _context.next = 11;
            return _model3["default"].create({});

          case 11:
            demoUser = _context.sent;
            _context.next = 14;
            return _bcrypt["default"].hash(demoUser._id + Math.random(), _env.SECURITY_SALT_ROUNDS);

          case 14:
            passwordHashed = _context.sent;
            _context.next = 17;
            return _model["default"].create({
              organizationId: organization._id,
              name: 'Demo User',
              email: "demo.user+".concat(demoUser._id, "@").concat(_params["default"].site.domain),
              password: passwordHashed,
              admin: true,
              demo: true
            });

          case 17:
            user = _context.sent;

            if (!user) {
              _context.next = 21;
              break;
            }

            _context.next = 21;
            return _model4["default"].create({
              organizationId: organization._id,
              userId: user._id,
              action: _params["default"].activity.types.create,
              message: "Your organization was created."
            });

          case 21:
            return _context.abrupt("return", {
              data: (0, _query.userAuthResponse)(user),
              message: 'You have been logged in successfully.'
            });

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](5);
            throw new Error("There was some error. Please try again.");

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 24]]);
  }));
  return _userStartNow.apply(this, arguments);
}

function userVerifySendCode(_x2) {
  return _userVerifySendCode.apply(this, arguments);
} // Verify email send code


function _userVerifySendCode() {
  _userVerifySendCode = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var email, auth, rules, user, code, verification;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = _ref2.params.email, auth = _ref2.auth;
            // Validation rules
            rules = [{
              data: {
                value: email
              },
              check: 'email',
              message: 'Please enter valid email.'
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
            _context2.prev = 9;
            _context2.next = 12;
            return _model["default"].findOne({
              email: email
            });

          case 12:
            user = _context2.sent;

            if (!user) {
              _context2.next = 17;
              break;
            }

            throw new Error("The email ".concat(email, " is already registered. Please try to login."));

          case 17:
            if (!((0, _utils.authCheck)(auth) && auth.user.demo)) {
              _context2.next = 22;
              break;
            }

            _context2.next = 20;
            return _model5["default"].findOne({
              userId: auth.user._id,
              email: email,
              verified: false,
              type: _params["default"].user.verification.signup
            });

          case 20:
            verification = _context2.sent;

            if (verification) {
              code = verification.code;
            }

          case 22:
            if (code) {
              _context2.next = 26;
              break;
            }

            code = (0, _utils.randomNumber)(1000, 9999);
            _context2.next = 26;
            return _model5["default"].create({
              email: email,
              code: code,
              verified: false,
              type: _params["default"].user.verification.signup
            });

          case 26:
            _context2.next = 28;
            return (0, _send.send)({
              to: {
                email: email
              },
              from: {
                name: _params["default"].site.emails.help.name,
                email: _params["default"].site.emails.help.email
              },
              subject: "Verification Code: ".concat(code),
              template: /*#__PURE__*/_react["default"].createElement(_Verify["default"], {
                code: code
              })
            });

          case 28:
            return _context2.abrupt("return", {
              data: true
            });

          case 29:
            _context2.next = 34;
            break;

          case 31:
            _context2.prev = 31;
            _context2.t1 = _context2["catch"](9);
            throw new Error(_params["default"].common.message.error.server);

          case 34:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 6], [9, 31]]);
  }));
  return _userVerifySendCode.apply(this, arguments);
}

function userVerifyCode(_x3) {
  return _userVerifyCode.apply(this, arguments);
} // Verify create/update user account


function _userVerifyCode() {
  _userVerifyCode = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref3) {
    var _ref3$params, email, code, rules, verification;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref3$params = _ref3.params, email = _ref3$params.email, code = _ref3$params.code;
            // Validation rules
            rules = [{
              data: {
                value: email
              },
              check: 'email',
              message: 'Please enter valid email.'
            }, {
              data: {
                value: code
              },
              check: 'notEmpty',
              message: 'Please enter valid code.'
            }]; // Validate

            _context3.prev = 2;
            (0, _validation["default"])(rules);
            _context3.next = 9;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](2);
            throw new Error(_context3.t0.message);

          case 9:
            _context3.prev = 9;
            _context3.next = 12;
            return _model5["default"].findOne({
              email: email,
              code: code,
              verified: false,
              type: _params["default"].user.verification.signup
            });

          case 12:
            verification = _context3.sent;

            if (!verification) {
              _context3.next = 19;
              break;
            }

            _context3.next = 16;
            return _model5["default"].updateOne({
              _id: verification._id
            }, {
              verified: true
            });

          case 16:
            return _context3.abrupt("return", {
              data: true
            });

          case 19:
            throw new Error('The code you entered is invalid. Please try again with valid code.');

          case 20:
            _context3.next = 25;
            break;

          case 22:
            _context3.prev = 22;
            _context3.t1 = _context3["catch"](9);
            throw new Error(_params["default"].common.message.error.server);

          case 25:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 6], [9, 22]]);
  }));
  return _userVerifyCode.apply(this, arguments);
}

function userVerifyUpdateAccount(_x4) {
  return _userVerifyUpdateAccount.apply(this, arguments);
} // Accept invitation


function _userVerifyUpdateAccount() {
  _userVerifyUpdateAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref4) {
    var _ref4$params, email, name, password, organizationName, auth, rules, verification, userCheck, user, message, passwordHashed, organizationDomain, organization;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref4$params = _ref4.params, email = _ref4$params.email, name = _ref4$params.name, password = _ref4$params.password, organizationName = _ref4$params.organizationName, auth = _ref4.auth;
            // Validation rules
            rules = [{
              data: {
                value: email
              },
              check: 'email',
              message: 'Please enter valid email.'
            }, {
              data: {
                value: name
              },
              check: 'notEmpty',
              message: 'Please enter valid name.'
            }, {
              data: {
                value: password,
                length: _params["default"].user.rules.passwordMinLength
              },
              check: 'lengthMin',
              message: "Please enter valid password. Minimum ".concat(_params["default"].user.rules.passwordMinLength, " is required.")
            }, {
              data: {
                value: organizationName
              },
              check: 'notEmpty',
              message: 'Please enter valid organization name.'
            }]; // Validate

            _context4.prev = 2;
            (0, _validation["default"])(rules);
            _context4.next = 9;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](2);
            throw new Error(_context4.t0.message);

          case 9:
            _context4.prev = 9;
            _context4.next = 12;
            return _model5["default"].findOne({
              email: email,
              verified: true,
              type: _params["default"].user.verification.signup
            });

          case 12:
            verification = _context4.sent;
            _context4.next = 15;
            return _model["default"].findOne({
              email: verification.email
            });

          case 15:
            userCheck = _context4.sent;

            if (userCheck) {
              _context4.next = 50;
              break;
            }

            if (!(verification && verification.verified)) {
              _context4.next = 47;
              break;
            }

            _context4.next = 20;
            return _bcrypt["default"].hash(password, _env.SECURITY_SALT_ROUNDS);

          case 20:
            passwordHashed = _context4.sent;
            organizationDomain = email.split('@')[1];

            if (!(auth.user && auth.user._id && auth.user.demo)) {
              _context4.next = 35;
              break;
            }

            _context4.next = 25;
            return _model["default"].updateOne({
              _id: auth.user._id
            }, {
              $set: {
                email: verification.email,
                password: passwordHashed,
                name: name,
                demo: false
              }
            });

          case 25:
            _context4.next = 27;
            return _model2["default"].updateOne({
              _id: auth.user.organizationId
            }, {
              $set: {
                name: organizationName,
                domain: organizationDomain
              }
            });

          case 27:
            _context4.next = 29;
            return _model4["default"].create({
              organizationId: auth.user.organizationId,
              userId: auth.user._id,
              action: _params["default"].activity.types.create,
              message: "".concat(name, " (").concat(email, ") joined the organization.")
            });

          case 29:
            _context4.next = 31;
            return _model["default"].findOne({
              _id: auth.user._id
            });

          case 31:
            user = _context4.sent;
            message = 'Your account has been verified and updated successfully.';
            _context4.next = 42;
            break;

          case 35:
            _context4.next = 37;
            return _model2["default"].create({
              name: organizationName,
              domain: organizationDomain
            });

          case 37:
            organization = _context4.sent;
            _context4.next = 40;
            return _model["default"].create({
              organizationId: organization._id,
              name: name,
              email: verification.email,
              password: passwordHashed,
              admin: true,
              demo: false
            });

          case 40:
            user = _context4.sent;
            message = 'Your account has been created successfully.';

          case 42:
            _context4.next = 44;
            return (0, _send.send)({
              to: {
                name: name,
                email: email
              },
              from: {
                name: _params["default"].site.emails.help.name,
                email: _params["default"].site.emails.help.email
              },
              subject: message,
              template: /*#__PURE__*/_react["default"].createElement(_AccountCreatedOrVerified["default"], {
                to: name,
                message: message
              })
            });

          case 44:
            return _context4.abrupt("return", {
              data: (0, _query.userAuthResponse)(user),
              message: message
            });

          case 47:
            throw new Error('The code you entered is invalid. Please try again with valid code.');

          case 48:
            _context4.next = 51;
            break;

          case 50:
            throw new Error("The email ".concat(verification.email, " is already registered. Please try to login."));

          case 51:
            _context4.next = 56;
            break;

          case 53:
            _context4.prev = 53;
            _context4.t1 = _context4["catch"](9);
            throw new Error(_params["default"].common.message.error.server);

          case 56:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 6], [9, 53]]);
  }));
  return _userVerifyUpdateAccount.apply(this, arguments);
}

function userAcceptInvite(_x5) {
  return _userAcceptInvite.apply(this, arguments);
} // Update


function _userAcceptInvite() {
  _userAcceptInvite = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_ref5) {
    var _ref5$params, id, name, password, rules, invite, passwordHashed, user, subject;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref5$params = _ref5.params, id = _ref5$params.id, name = _ref5$params.name, password = _ref5$params.password;
            // Validation rules
            rules = [{
              data: {
                value: id
              },
              check: 'notEmpty',
              message: 'Please enter valid email.'
            }, {
              data: {
                value: name
              },
              check: 'notEmpty',
              message: 'Please enter valid name.'
            }, {
              data: {
                value: password,
                length: _params["default"].user.rules.passwordMinLength
              },
              check: 'lengthMin',
              message: "Please enter valid password. Minimum ".concat(_params["default"].user.rules.passwordMinLength, " is required.")
            }]; // Validate

            _context5.prev = 2;
            (0, _validation["default"])(rules);
            _context5.next = 9;
            break;

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](2);
            throw new Error(_context5.t0.message);

          case 9:
            _context5.prev = 9;
            _context5.next = 12;
            return _model6["default"].findOne({
              _id: id,
              accepted: false
            });

          case 12:
            invite = _context5.sent;

            if (!invite) {
              _context5.next = 31;
              break;
            }

            _context5.next = 16;
            return _bcrypt["default"].hash(password, _env.SECURITY_SALT_ROUNDS);

          case 16:
            passwordHashed = _context5.sent;
            _context5.next = 19;
            return _model["default"].create({
              organizationId: invite.organizationId,
              name: name,
              email: invite.email,
              password: passwordHashed,
              admin: false,
              demo: false
            });

          case 19:
            user = _context5.sent;
            _context5.next = 22;
            return _model6["default"].updateOne({
              _id: invite._id
            }, {
              $set: {
                accepted: true
              }
            });

          case 22:
            // Send email
            subject = 'Your account has been created successfully.';
            _context5.next = 25;
            return (0, _send.send)({
              to: {
                name: name,
                email: invite.email
              },
              from: {
                name: _params["default"].site.emails.help.name,
                email: _params["default"].site.emails.help.email
              },
              subject: subject,
              template: /*#__PURE__*/_react["default"].createElement(_AccountCreatedOrVerified["default"], {
                to: name,
                message: subject
              })
            });

          case 25:
            if (!invite) {
              _context5.next = 28;
              break;
            }

            _context5.next = 28;
            return _model4["default"].create({
              organizationId: invite.organizationId,
              userId: user._id,
              inviteId: invite._id,
              action: _params["default"].activity.types.create,
              message: "".concat(name, " (").concat(invite.email, ") joined the organization.")
            });

          case 28:
            return _context5.abrupt("return", {
              data: (0, _query.userAuthResponse)(user),
              message: "Invitation accepted successfully. Welcome ".concat(name, "!")
            });

          case 31:
            throw new Error("Sorry, this invitation is not valid anymore.");

          case 32:
            _context5.next = 37;
            break;

          case 34:
            _context5.prev = 34;
            _context5.t1 = _context5["catch"](9);
            throw new Error(_params["default"].common.message.error.server);

          case 37:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 6], [9, 34]]);
  }));
  return _userAcceptInvite.apply(this, arguments);
}

function userUpdate(_x6) {
  return _userUpdate.apply(this, arguments);
} // Reset password send code


function _userUpdate() {
  _userUpdate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(_ref6) {
    var name, auth, rules, user;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            name = _ref6.params.name, auth = _ref6.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context6.next = 22;
              break;
            }

            // Validation rules
            rules = [{
              data: {
                value: name
              },
              check: 'notEmpty',
              message: 'Please enter valid name.'
            }]; // Validate

            _context6.prev = 3;
            (0, _validation["default"])(rules);
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](3);
            throw new Error(_context6.t0.message);

          case 10:
            _context6.prev = 10;
            _context6.next = 13;
            return _model["default"].updateOne({
              _id: auth.user._id
            }, {
              name: name
            });

          case 13:
            _context6.next = 15;
            return _model["default"].findOne({
              _id: auth.user._id
            });

          case 15:
            user = _context6.sent;
            return _context6.abrupt("return", {
              data: (0, _query.userAuthResponse)(user),
              message: 'Your profile has been updated successfully.'
            });

          case 19:
            _context6.prev = 19;
            _context6.t1 = _context6["catch"](10);
            throw new Error(_params["default"].common.message.error.server);

          case 22:
            throw new Error('Please login to update profile.');

          case 23:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 7], [10, 19]]);
  }));
  return _userUpdate.apply(this, arguments);
}

function userResetPasswordSendCode(_x7) {
  return _userResetPasswordSendCode.apply(this, arguments);
} // Verify email send code


function _userResetPasswordSendCode() {
  _userResetPasswordSendCode = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(_ref7) {
    var email, rules, user, code, verification;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            email = _ref7.params.email;
            // Validation rules
            rules = [{
              data: {
                value: email
              },
              check: 'email',
              message: 'Please enter valid email.'
            }]; // Validate

            _context7.prev = 2;
            (0, _validation["default"])(rules);
            _context7.next = 9;
            break;

          case 6:
            _context7.prev = 6;
            _context7.t0 = _context7["catch"](2);
            throw new Error(_context7.t0.message);

          case 9:
            _context7.prev = 9;
            _context7.next = 12;
            return _model["default"].findOne({
              email: email
            });

          case 12:
            user = _context7.sent;

            if (!user) {
              _context7.next = 24;
              break;
            }

            _context7.next = 16;
            return _model5["default"].findOne({
              email: email,
              verified: false,
              type: _params["default"].user.verification.password
            });

          case 16:
            verification = _context7.sent;

            if (verification) {
              code = verification.code;
            }

            if (!code) {
              code = (0, _utils.randomNumber)(1000, 9999);

              _model5["default"].create({
                userId: user._id,
                email: email,
                code: code,
                verified: false,
                type: _params["default"].user.verification.password
              });
            }

            _context7.next = 21;
            return (0, _send.send)({
              to: {
                email: email
              },
              from: {
                name: _params["default"].site.emails.help.name,
                email: _params["default"].site.emails.help.email
              },
              subject: "Verification Code: ".concat(code),
              template: /*#__PURE__*/_react["default"].createElement(_Verify["default"], {
                code: code
              })
            });

          case 21:
            return _context7.abrupt("return", {
              data: true
            });

          case 24:
            throw new Error("The email ".concat(email, " is not registered. Please signup."));

          case 25:
            _context7.next = 30;
            break;

          case 27:
            _context7.prev = 27;
            _context7.t1 = _context7["catch"](9);
            throw new Error(_params["default"].common.message.error.server);

          case 30:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 6], [9, 27]]);
  }));
  return _userResetPasswordSendCode.apply(this, arguments);
}

function userResetPasswordVerifyCode(_x8) {
  return _userResetPasswordVerifyCode.apply(this, arguments);
} // Reset password update


function _userResetPasswordVerifyCode() {
  _userResetPasswordVerifyCode = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(_ref8) {
    var _ref8$params, email, code, rules, verification;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _ref8$params = _ref8.params, email = _ref8$params.email, code = _ref8$params.code;
            // Validation rules
            rules = [{
              data: {
                value: email
              },
              check: 'email',
              message: 'Please enter valid email.'
            }, {
              data: {
                value: code
              },
              check: 'notEmpty',
              message: 'Please enter valid code.'
            }]; // Validate

            _context8.prev = 2;
            (0, _validation["default"])(rules);
            _context8.next = 9;
            break;

          case 6:
            _context8.prev = 6;
            _context8.t0 = _context8["catch"](2);
            throw new Error(_context8.t0.message);

          case 9:
            _context8.prev = 9;
            _context8.next = 12;
            return _model5["default"].findOne({
              email: email,
              code: code,
              verified: false,
              type: _params["default"].user.verification.password
            });

          case 12:
            verification = _context8.sent;

            if (!verification) {
              _context8.next = 19;
              break;
            }

            _context8.next = 16;
            return _model5["default"].updateOne({
              _id: verification._id
            }, {
              verified: true
            });

          case 16:
            return _context8.abrupt("return", {
              data: true
            });

          case 19:
            throw new Error('The code you entered is invalid. Please try again with valid code.');

          case 20:
            _context8.next = 25;
            break;

          case 22:
            _context8.prev = 22;
            _context8.t1 = _context8["catch"](9);
            throw new Error(_params["default"].common.message.error.server);

          case 25:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 6], [9, 22]]);
  }));
  return _userResetPasswordVerifyCode.apply(this, arguments);
}

function userResetPasswordUpdate(_x9) {
  return _userResetPasswordUpdate.apply(this, arguments);
}

function _userResetPasswordUpdate() {
  _userResetPasswordUpdate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(_ref9) {
    var _ref9$params, email, password, rules, verification, user, passwordHashed, userUpdated;

    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _ref9$params = _ref9.params, email = _ref9$params.email, password = _ref9$params.password;
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

            _context9.prev = 2;
            (0, _validation["default"])(rules);
            _context9.next = 9;
            break;

          case 6:
            _context9.prev = 6;
            _context9.t0 = _context9["catch"](2);
            throw new Error(_context9.t0.message);

          case 9:
            _context9.prev = 9;
            _context9.next = 12;
            return _model5["default"].findOne({
              email: email,
              verified: true,
              type: _params["default"].user.verification.password
            });

          case 12:
            verification = _context9.sent;
            _context9.next = 15;
            return _model["default"].findOne({
              email: verification.email
            });

          case 15:
            user = _context9.sent;

            if (!user) {
              _context9.next = 30;
              break;
            }

            if (!(verification && verification.verified)) {
              _context9.next = 27;
              break;
            }

            _context9.next = 20;
            return _bcrypt["default"].hash(password, _env.SECURITY_SALT_ROUNDS);

          case 20:
            passwordHashed = _context9.sent;
            _context9.next = 23;
            return _model["default"].findOneAndUpdate({
              _id: user.id
            }, {
              password: passwordHashed
            }, {
              "new": true
            });

          case 23:
            userUpdated = _context9.sent;
            return _context9.abrupt("return", {
              data: (0, _query.userAuthResponse)(userUpdated),
              message: 'Your password has been reset successfully.'
            });

          case 27:
            throw new Error('The code you entered is invalid. Please try again with valid code.');

          case 28:
            _context9.next = 31;
            break;

          case 30:
            throw new Error("The email ".concat(email, " is not registered. Please signup."));

          case 31:
            _context9.next = 36;
            break;

          case 33:
            _context9.prev = 33;
            _context9.t1 = _context9["catch"](9);
            throw new Error(_params["default"].common.message.error.server);

          case 36:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 6], [9, 33]]);
  }));
  return _userResetPasswordUpdate.apply(this, arguments);
}
//# sourceMappingURL=mutation.js.map