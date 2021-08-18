"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobCreate = jobCreate;
exports.jobUpdate = jobUpdate;
exports.jobRemove = jobRemove;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _utils = require("../../setup/helpers/utils");

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _model = _interopRequireDefault(require("../activity/model"));

var _model2 = _interopRequireDefault(require("./model"));

// App Imports
// Create
function jobCreate(_x) {
  return _jobCreate.apply(this, arguments);
} // Update


function _jobCreate() {
  _jobCreate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var _ref$params, projectId, role, _ref$params$descripti, description, auth, rules, job;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$params = _ref.params, projectId = _ref$params.projectId, role = _ref$params.role, _ref$params$descripti = _ref$params.description, description = _ref$params$descripti === void 0 ? '' : _ref$params$descripti, auth = _ref.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context.next = 23;
              break;
            }

            // Validation rules
            rules = [{
              data: {
                value: projectId
              },
              check: 'notEmpty',
              message: _params["default"].common.message.error.invalidData
            }, {
              data: {
                value: role
              },
              check: 'notEmpty',
              message: 'Please enter a valid role.'
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
            return _model2["default"].create({
              organizationId: auth.user.organizationId,
              projectId: projectId,
              userId: auth.user._id,
              role: role,
              description: description
            });

          case 13:
            job = _context.sent;

            if (!job) {
              _context.next = 17;
              break;
            }

            _context.next = 17;
            return _model["default"].create({
              organizationId: auth.user.organizationId,
              userId: auth.user._id,
              projectId: projectId,
              jobId: job._id,
              action: _params["default"].activity.types.create,
              message: "".concat(auth.user.name, " added a new job ").concat(role, ".")
            });

          case 17:
            return _context.abrupt("return", {
              data: job
            });

          case 20:
            _context.prev = 20;
            _context.t1 = _context["catch"](10);
            throw new Error(_params["default"].common.message.error.server);

          case 23:
            throw new Error(_params["default"].user.message.error.auth);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 7], [10, 20]]);
  }));
  return _jobCreate.apply(this, arguments);
}

function jobUpdate(_x2) {
  return _jobUpdate.apply(this, arguments);
} // Delete


function _jobUpdate() {
  _jobUpdate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var _ref2$params, id, projectId, role, _ref2$params$descript, description, auth, rules, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref2$params = _ref2.params, id = _ref2$params.id, projectId = _ref2$params.projectId, role = _ref2$params.role, _ref2$params$descript = _ref2$params.description, description = _ref2$params$descript === void 0 ? '' : _ref2$params$descript, auth = _ref2.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context2.next = 20;
              break;
            }

            // Validation rules
            rules = [{
              data: {
                value: id
              },
              check: 'notEmpty',
              message: _params["default"].common.message.error.invalidData
            }, {
              data: {
                value: role
              },
              check: 'notEmpty',
              message: 'Please enter a valid role.'
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
            return _model2["default"].updateOne({
              _id: id
            }, {
              $set: {
                projectId: projectId,
                role: role,
                description: description
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
  return _jobUpdate.apply(this, arguments);
}

function jobRemove(_x3, _x4, _x5) {
  return _jobRemove.apply(this, arguments);
}

function _jobRemove() {
  _jobRemove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(parentValue, _ref3, _ref4) {
    var id, auth, rules, data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = _ref3.id;
            auth = _ref4.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context3.next = 21;
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

            _context3.prev = 4;
            (0, _validation["default"])(rules);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](4);
            throw new Error(_context3.t0.message);

          case 11:
            _context3.prev = 11;
            _context3.next = 14;
            return _model2["default"].remove({
              _id: _id,
              userId: auth.user._id
            });

          case 14:
            data = _context3.sent;
            return _context3.abrupt("return", {
              data: data
            });

          case 18:
            _context3.prev = 18;
            _context3.t1 = _context3["catch"](11);
            throw new Error(_params["default"].common.message.error.server);

          case 21:
            throw new Error(_params["default"].user.message.error.auth);

          case 22:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[4, 8], [11, 18]]);
  }));
  return _jobRemove.apply(this, arguments);
}
//# sourceMappingURL=mutation.js.map