"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activitiesByOrganization = activitiesByOrganization;
exports.activitiesByProject = activitiesByProject;
exports.activitiesByCandidate = activitiesByCandidate;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _utils = require("../../setup/helpers/utils");

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _model = _interopRequireDefault(require("./model"));

// App Imports
// Get by project
function activitiesByOrganization(_x) {
  return _activitiesByOrganization.apply(this, arguments);
} // Get by project


function _activitiesByOrganization() {
  _activitiesByOrganization = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var fields, auth, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fields = _ref.fields, auth = _ref.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context.next = 12;
              break;
            }

            _context.prev = 2;
            _context.next = 5;
            return _model["default"].find({
              organizationId: auth.user.organizationId
            }).sort({
              createdAt: -1
            }).select(fields);

          case 5:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data
            });

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            throw new Error(_params["default"].common.message.error.server);

          case 12:
            throw new Error(_params["default"].user.message.error.auth);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));
  return _activitiesByOrganization.apply(this, arguments);
}

function activitiesByProject(_x2) {
  return _activitiesByProject.apply(this, arguments);
} // Get by candidate


function _activitiesByProject() {
  _activitiesByProject = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var projectId, fields, auth, rules, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            projectId = _ref2.params.projectId, fields = _ref2.fields, auth = _ref2.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context2.next = 20;
              break;
            }

            // Validation rules
            rules = [{
              data: {
                value: projectId
              },
              check: 'notEmpty',
              message: _params["default"].common.message.error.invalidData
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
            return _model["default"].find({
              organizationId: auth.user.organizationId,
              projectId: projectId
            }).sort({
              createdAt: -1
            }).select(fields);

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
  return _activitiesByProject.apply(this, arguments);
}

function activitiesByCandidate(_x3) {
  return _activitiesByCandidate.apply(this, arguments);
}

function _activitiesByCandidate() {
  _activitiesByCandidate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref3) {
    var candidateId, fields, auth, rules, data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            candidateId = _ref3.params.candidateId, fields = _ref3.fields, auth = _ref3.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context3.next = 20;
              break;
            }

            // Validation rules
            rules = [{
              data: {
                value: candidateId
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
            return _model["default"].find({
              organizationId: auth.user.organizationId,
              candidateId: candidateId
            }).sort({
              createdAt: 1
            }).select(fields);

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
  return _activitiesByCandidate.apply(this, arguments);
}
//# sourceMappingURL=query.js.map