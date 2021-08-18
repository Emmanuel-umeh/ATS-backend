"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kanbanCreate = kanbanCreate;
exports.kanbanUpdate = kanbanUpdate;
exports.kanbanUpdateStatus = kanbanUpdateStatus;
exports.kanbanRemove = kanbanRemove;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _utils = require("../../setup/helpers/utils");

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _model = _interopRequireDefault(require("../activity/model"));

var _model2 = _interopRequireDefault(require("./model"));

// Imports
// App Imports
// Create
function kanbanCreate(_x) {
  return _kanbanCreate.apply(this, arguments);
} // Update


function _kanbanCreate() {
  _kanbanCreate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var _ref$params, projectId, candidateId, _ref$params$interview, interviews, status, _ref$params$highlight, highlight, auth, rules, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$params = _ref.params, projectId = _ref$params.projectId, candidateId = _ref$params.candidateId, _ref$params$interview = _ref$params.interviews, interviews = _ref$params$interview === void 0 ? [] : _ref$params$interview, status = _ref$params.status, _ref$params$highlight = _ref$params.highlight, highlight = _ref$params$highlight === void 0 ? false : _ref$params$highlight, auth = _ref.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context.next = 20;
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
                value: candidateId
              },
              check: 'notEmpty',
              message: _params["default"].common.message.error.invalidData
            }, {
              data: {
                value: status
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
            return _model2["default"].create({
              organizationId: auth.user.organizationId,
              userId: auth.user._id,
              projectId: projectId,
              candidateId: candidateId,
              interviews: interviews,
              status: status,
              highlight: highlight
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
  return _kanbanCreate.apply(this, arguments);
}

function kanbanUpdate(_x2) {
  return _kanbanUpdate.apply(this, arguments);
} // Update status


function _kanbanUpdate() {
  _kanbanUpdate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var _ref2$params, id, interviews, status, highlight, auth, rules, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref2$params = _ref2.params, id = _ref2$params.id, interviews = _ref2$params.interviews, status = _ref2$params.status, highlight = _ref2$params.highlight, auth = _ref2.auth;

            if (!((0, _utils.authCheck)(auth) && !(0, _isEmpty["default"])(id))) {
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
                interviews: interviews,
                status: status,
                highlight: highlight
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
  return _kanbanUpdate.apply(this, arguments);
}

function kanbanUpdateStatus(_x3) {
  return _kanbanUpdateStatus.apply(this, arguments);
} // Delete


function _kanbanUpdateStatus() {
  _kanbanUpdateStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref3) {
    var _ref3$params, id, status, auth, rules, updated, kanban;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref3$params = _ref3.params, id = _ref3$params.id, status = _ref3$params.status, auth = _ref3.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context3.next = 26;
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
                value: status
              },
              check: 'notEmpty',
              message: 'Please enter valid status.'
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
            return _model2["default"].updateOne({
              _id: id
            }, {
              $set: {
                status: status
              }
            });

          case 13:
            updated = _context3.sent;

            if (!updated) {
              _context3.next = 20;
              break;
            }

            _context3.next = 17;
            return _model2["default"].findOne({
              _id: id
            }).populate('candidateId');

          case 17:
            kanban = _context3.sent;
            _context3.next = 20;
            return _model["default"].create({
              organizationId: auth.user.organizationId,
              userId: auth.user._id,
              projectId: kanban.projectId,
              candidateId: kanban.candidateId._id,
              action: _params["default"].activity.types.update,
              message: "".concat(auth.user.name, " updated ").concat(kanban.candidateId.name, "'s status to ").concat(status.toUpperCase(), ".")
            });

          case 20:
            return _context3.abrupt("return", {
              data: updated
            });

          case 23:
            _context3.prev = 23;
            _context3.t1 = _context3["catch"](10);
            throw new Error(_params["default"].common.message.error.server);

          case 26:
            throw new Error(_params["default"].user.message.error.auth);

          case 27:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 7], [10, 23]]);
  }));
  return _kanbanUpdateStatus.apply(this, arguments);
}

function kanbanRemove(_x4) {
  return _kanbanRemove.apply(this, arguments);
}

function _kanbanRemove() {
  _kanbanRemove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref4) {
    var id, auth, rules, data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = _ref4.params.id, auth = _ref4.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context4.next = 20;
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

            _context4.prev = 3;
            (0, _validation["default"])(rules);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](3);
            throw new Error(_context4.t0.message);

          case 10:
            _context4.prev = 10;
            _context4.next = 13;
            return _model2["default"].remove({
              _id: _id,
              userId: auth.user._id
            });

          case 13:
            data = _context4.sent;
            return _context4.abrupt("return", {
              data: data
            });

          case 17:
            _context4.prev = 17;
            _context4.t1 = _context4["catch"](10);
            throw new Error(_params["default"].common.message.error.server);

          case 20:
            throw new Error(_params["default"].user.message.error.auth);

          case 21:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 7], [10, 17]]);
  }));
  return _kanbanRemove.apply(this, arguments);
}
//# sourceMappingURL=mutation.js.map