"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kanban = kanban;
exports.kanbansByProject = kanbansByProject;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _utils = require("../../setup/helpers/utils");

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _model = _interopRequireDefault(require("./model"));

// App Imports
// Get by ID
function kanban(_x) {
  return _kanban.apply(this, arguments);
} // Get by project


function _kanban() {
  _kanban = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var id, fields, auth, rules, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.params.id, fields = _ref.fields, auth = _ref.auth;

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
              _id: id,
              organizationId: auth.user.organizationId
            }).select(fields.kanban).populate({
              path: 'candidateId',
              select: fields.candidate,
              populate: [{
                path: 'projectId',
                select: fields.project
              }, {
                path: 'jobId',
                select: fields.job
              }]
            }).populate({
              path: 'interviews',
              select: fields.interview,
              populate: [{
                path: 'interviewerId',
                select: fields.interviewer
              }, {
                path: 'feedbackId',
                select: fields.feedback
              }]
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
  return _kanban.apply(this, arguments);
}

function kanbansByProject(_x2) {
  return _kanbansByProject.apply(this, arguments);
}

function _kanbansByProject() {
  _kanbansByProject = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
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
            }).select(fields.kanban).populate({
              path: 'candidateId',
              select: fields.candidate,
              populate: {
                path: 'jobId',
                select: fields.job
              }
            }).populate({
              path: 'interviews',
              select: fields.interview,
              populate: [{
                path: 'interviewerId',
                select: fields.interviewer
              }, {
                path: 'feedbackId',
                select: fields.feedback
              }]
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
  return _kanbansByProject.apply(this, arguments);
}
//# sourceMappingURL=query.js.map