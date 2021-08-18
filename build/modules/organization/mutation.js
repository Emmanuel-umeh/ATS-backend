"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.organizationCreate = organizationCreate;
exports.organizationUpdate = organizationUpdate;
exports.organizationRemove = organizationRemove;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _utils = require("../../setup/helpers/utils");

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _model = _interopRequireDefault(require("./model"));

// App Imports
// Create
function organizationCreate(_x) {
  return _organizationCreate.apply(this, arguments);
} // Update product


function _organizationCreate() {
  _organizationCreate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var _ref$params, name, _ref$params$descripti, description, _ref$params$domain, domain, auth, rules, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$params = _ref.params, name = _ref$params.name, _ref$params$descripti = _ref$params.description, description = _ref$params$descripti === void 0 ? '' : _ref$params$descripti, _ref$params$domain = _ref$params.domain, domain = _ref$params$domain === void 0 ? '' : _ref$params$domain, auth = _ref.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context.next = 20;
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
            return _model["default"].create({
              userId: auth.user._id,
              name: name,
              description: description,
              domain: domain
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
  return _organizationCreate.apply(this, arguments);
}

function organizationUpdate(_x2) {
  return _organizationUpdate.apply(this, arguments);
} // Delete


function _organizationUpdate() {
  _organizationUpdate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var _ref2$params, id, name, _ref2$params$descript, description, _ref2$params$domain, domain, auth, rules, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref2$params = _ref2.params, id = _ref2$params.id, name = _ref2$params.name, _ref2$params$descript = _ref2$params.description, description = _ref2$params$descript === void 0 ? '' : _ref2$params$descript, _ref2$params$domain = _ref2$params.domain, domain = _ref2$params$domain === void 0 ? '' : _ref2$params$domain, auth = _ref2.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context2.next = 20;
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

            _context2.prev = 3;
            (0, _validation["default"])(rules);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](3);
            throw new Error(_context2.t0.message);

          case 10:
            _context2.prev = 10;
            _context2.next = 13;
            return _model["default"].updateOne({
              _id: auth.user.organizationId
            }, {
              $set: {
                name: name,
                description: description,
                domain: domain
              }
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
    }, _callee2, null, [[3, 7], [10, 17]]);
  }));
  return _organizationUpdate.apply(this, arguments);
}

function organizationRemove(_x3) {
  return _organizationRemove.apply(this, arguments);
}

function _organizationRemove() {
  _organizationRemove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref3) {
    var id, auth, rules, data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = _ref3.params.id, auth = _ref3.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context3.next = 20;
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

            _context3.prev = 3;
            (0, _validation["default"])(rules);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](3);
            throw new Error(_context3.t0.message);

          case 10:
            _context3.prev = 10;
            _context3.next = 13;
            return _model["default"].remove({
              _id: _id,
              userId: auth.user._id
            });

          case 13:
            data = _context3.sent;
            return _context3.abrupt("return", {
              data: data
            });

          case 17:
            _context3.prev = 17;
            _context3.t1 = _context3["catch"](10);
            throw new Error(_params["default"].common.message.error.server);

          case 20:
            throw new Error(_params["default"].user.message.error.auth);

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 7], [10, 17]]);
  }));
  return _organizationRemove.apply(this, arguments);
}
//# sourceMappingURL=mutation.js.map