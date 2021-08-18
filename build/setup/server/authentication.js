"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _env = require("../config/env");

var _model = _interopRequireDefault(require("../../modules/user/model"));

// Imports
// App Imports
// Authentication middleware
function _default(_x, _x2, _x3) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response, next) {
    var header, token, userToken, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            header = request.headers.authentication;

            if (!(header && header !== null)) {
              _context.next = 16;
              break;
            }

            _context.prev = 2;
            token = header.split(' ');
            userToken = _jsonwebtoken["default"].verify(token[1], _env.SECURITY_SECRET);
            _context.next = 7;
            return _model["default"].findOne({
              _id: userToken.id
            });

          case 7:
            user = _context.sent;

            if (user) {
              request.auth = {
                isAuthenticated: true,
                user: user
              };
            }

            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            console.warn('Invalid token detected.');

          case 14:
            _context.next = 17;
            break;

          case 16:
            request.auth = {
              isAuthenticated: false,
              user: null
            };

          case 17:
            next();

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 11]]);
  }));
  return _ref.apply(this, arguments);
}
//# sourceMappingURL=authentication.js.map