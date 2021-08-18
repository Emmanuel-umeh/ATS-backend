"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.project = project;
exports.projectsByOrganization = projectsByOrganization;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _utils = require("../../setup/helpers/utils");

var _model = _interopRequireDefault(require("./model"));

// App Imports
// Get project by ID
function project(_x) {
  return _project.apply(this, arguments);
} // Get by organization


function _project() {
  _project = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var id, auth, rules, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.params.id, auth = _ref.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context.next = 20;
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
            _context.prev = 10;
            _context.next = 13;
            return _model["default"].findOne({
              _id: id
            });

          case 13:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data
            });

          case 17:
            _context.prev = 17;
            _context.t1 = _context["catch"](10);
            throw new Error(_params["default"].common.message.error.server);

          case 20:
            throw new Error(_params["default"].user.message.error.auth);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 7], [10, 17]]);
  }));
  return _project.apply(this, arguments);
}

function projectsByOrganization(_x2) {
  return _projectsByOrganization.apply(this, arguments);
}

function _projectsByOrganization() {
  _projectsByOrganization = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var fields, auth, data;
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
            return _model["default"].find({
              organizationId: auth.user.organizationId
            }).select(fields);

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
  return _projectsByOrganization.apply(this, arguments);
}
//# sourceMappingURL=query.js.map