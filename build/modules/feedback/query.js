"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.feedback = feedback;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _model = _interopRequireDefault(require("./model"));

// App Imports
// Get by ID
function feedback(_x) {
  return _feedback.apply(this, arguments);
}

function _feedback() {
  _feedback = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
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
              _id: id
            });

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
  return _feedback.apply(this, arguments);
}
//# sourceMappingURL=query.js.map