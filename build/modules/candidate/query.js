"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.candidate = candidate;
exports.candidatesByProject = candidatesByProject;
exports.candidatesByOrganization = candidatesByOrganization;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _utils = require("../../setup/helpers/utils");

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _model = _interopRequireDefault(require("./model"));

// App Imports
// Get candidate by ID
function candidate(_x) {
  return _candidate.apply(this, arguments);
} // Get by project


function _candidate() {
  _candidate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var id, _ref$fields, fields, rules, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.params.id, _ref$fields = _ref.fields, fields = _ref$fields === void 0 ? {
              candidate: [],
              project: [],
              job: []
            } : _ref$fields;
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
            }).select(fields.candidate).populate({
              path: 'projectId',
              select: fields.project
            }).populate({
              path: 'jobId',
              select: fields.job
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
  return _candidate.apply(this, arguments);
}

function candidatesByProject(_x2) {
  return _candidatesByProject.apply(this, arguments);
} // Get by organization


function _candidatesByProject() {
  _candidatesByProject = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var projectId, _ref2$fields, fields, auth, rules, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            projectId = _ref2.params.projectId, _ref2$fields = _ref2.fields, fields = _ref2$fields === void 0 ? {
              candidate: [],
              job: []
            } : _ref2$fields, auth = _ref2.auth;

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
            }).select(fields.candidate).populate({
              path: 'projectId',
              select: fields.project
            }).populate({
              path: 'jobId',
              select: fields.job
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
  return _candidatesByProject.apply(this, arguments);
}

function candidatesByOrganization(_x3) {
  return _candidatesByOrganization.apply(this, arguments);
}

function _candidatesByOrganization() {
  _candidatesByOrganization = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref3) {
    var _ref3$fields, fields, auth, data;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref3$fields = _ref3.fields, fields = _ref3$fields === void 0 ? {
              candidate: [],
              project: [],
              job: []
            } : _ref3$fields, auth = _ref3.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context3.next = 12;
              break;
            }

            _context3.prev = 2;
            _context3.next = 5;
            return _model["default"].find({
              organizationId: auth.user.organizationId
            }).select(fields.candidate).populate({
              path: 'projectId',
              select: fields.project
            }).populate({
              path: 'jobId',
              select: fields.job
            });

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
  return _candidatesByOrganization.apply(this, arguments);
}
//# sourceMappingURL=query.js.map