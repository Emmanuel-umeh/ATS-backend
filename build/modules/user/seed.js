"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _env = require("../../setup/config/env");

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _model = _interopRequireDefault(require("../organization/model"));

var _model2 = _interopRequireDefault(require("./model"));

// Imports
// App Imports
// Seeds
function _default() {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var organization, users, _i, _users, user;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('SEED - Users..');
            _context.next = 3;
            return _model["default"].findOne();

          case 3:
            organization = _context.sent;
            users = [{
              organizationId: organization._id,
              name: 'Jon Doe',
              email: 'user@hiresmart.app',
              password: '123456',
              role: _params["default"].user.roles.user.key,
              admin: true,
              demo: false
            }];
            _i = 0, _users = users;

          case 6:
            if (!(_i < _users.length)) {
              _context.next = 16;
              break;
            }

            user = _users[_i];
            _context.next = 10;
            return _bcrypt["default"].hash(user.password, _env.SECURITY_SALT_ROUNDS);

          case 10:
            user.password = _context.sent;
            _context.next = 13;
            return _model2["default"].create(user);

          case 13:
            _i++;
            _context.next = 6;
            break;

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}
//# sourceMappingURL=seed.js.map