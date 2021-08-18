"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.candidateCreate = candidateCreate;
exports.candidateUpdate = candidateUpdate;
exports.candidateRemove = candidateRemove;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _utils = require("../../setup/helpers/utils");

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _model = _interopRequireDefault(require("../kanban/model"));

var _model2 = _interopRequireDefault(require("../activity/model"));

var _model3 = _interopRequireDefault(require("./model"));

// Imports
// App Imports
// Create
function candidateCreate(_x) {
  return _candidateCreate.apply(this, arguments);
} // Update


function _candidateCreate() {
  _candidateCreate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var _ref$params, projectId, _ref$params$jobId, jobId, name, email, mobile, experience, resume, _ref$params$salaryCur, salaryCurrent, _ref$params$salaryExp, salaryExpected, auth, rules, item, candidate, kanban;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$params = _ref.params, projectId = _ref$params.projectId, _ref$params$jobId = _ref$params.jobId, jobId = _ref$params$jobId === void 0 ? '' : _ref$params$jobId, name = _ref$params.name, email = _ref$params.email, mobile = _ref$params.mobile, experience = _ref$params.experience, resume = _ref$params.resume, _ref$params$salaryCur = _ref$params.salaryCurrent, salaryCurrent = _ref$params$salaryCur === void 0 ? '' : _ref$params$salaryCur, _ref$params$salaryExp = _ref$params.salaryExpected, salaryExpected = _ref$params$salaryExp === void 0 ? '' : _ref$params$salaryExp, auth = _ref.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context.next = 28;
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
                value: name
              },
              check: 'notEmpty',
              message: 'Please enter a valid name.'
            }, {
              data: {
                value: email
              },
              check: 'email',
              message: 'Please enter a valid email.'
            }, {
              data: {
                value: mobile
              },
              check: 'notEmpty',
              message: 'Please enter a valid mobile number.'
            }, {
              data: {
                value: experience
              },
              check: 'notEmpty',
              message: 'Please enter a valid experience in years.'
            }, {
              data: {
                value: resume
              },
              check: 'notEmpty',
              message: 'Please upload resume.'
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
            item = {
              organizationId: auth.user.organizationId,
              projectId: projectId,
              userId: auth.user._id,
              name: name,
              email: email,
              mobile: mobile,
              experience: experience,
              resume: resume,
              salaryCurrent: salaryCurrent,
              salaryExpected: salaryExpected
            };

            if (!(0, _isEmpty["default"])(jobId)) {
              item.jobId = jobId;
            }

            _context.next = 15;
            return _model3["default"].create(item);

          case 15:
            candidate = _context.sent;

            if (!candidate) {
              _context.next = 22;
              break;
            }

            _context.next = 19;
            return _model["default"].create({
              organizationId: auth.user.organizationId,
              projectId: projectId,
              candidateId: candidate._id,
              userId: auth.user._id,
              status: _params["default"].kanban.columns[0].key,
              highlight: false
            });

          case 19:
            kanban = _context.sent;
            _context.next = 22;
            return _model2["default"].create({
              organizationId: auth.user.organizationId,
              userId: auth.user._id,
              projectId: projectId,
              candidateId: candidate._id,
              kanbanId: kanban._id,
              action: _params["default"].activity.types.create,
              message: "".concat(auth.user.name, " added a new candidate ").concat(name, " (").concat(email, ").")
            });

          case 22:
            return _context.abrupt("return", {
              data: candidate
            });

          case 25:
            _context.prev = 25;
            _context.t1 = _context["catch"](10);
            throw new Error(_params["default"].common.message.error.server);

          case 28:
            throw new Error(_params["default"].user.message.error.auth);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 7], [10, 25]]);
  }));
  return _candidateCreate.apply(this, arguments);
}

function candidateUpdate(_x2) {
  return _candidateUpdate.apply(this, arguments);
} // Delete


function _candidateUpdate() {
  _candidateUpdate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var _ref2$params, id, projectId, _ref2$params$jobId, jobId, name, email, mobile, experience, resume, _ref2$params$salaryCu, salaryCurrent, _ref2$params$salaryEx, salaryExpected, auth, rules, item, candidate;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref2$params = _ref2.params, id = _ref2$params.id, projectId = _ref2$params.projectId, _ref2$params$jobId = _ref2$params.jobId, jobId = _ref2$params$jobId === void 0 ? '' : _ref2$params$jobId, name = _ref2$params.name, email = _ref2$params.email, mobile = _ref2$params.mobile, experience = _ref2$params.experience, resume = _ref2$params.resume, _ref2$params$salaryCu = _ref2$params.salaryCurrent, salaryCurrent = _ref2$params$salaryCu === void 0 ? '' : _ref2$params$salaryCu, _ref2$params$salaryEx = _ref2$params.salaryExpected, salaryExpected = _ref2$params$salaryEx === void 0 ? '' : _ref2$params$salaryEx, auth = _ref2.auth;

            if (!((0, _utils.authCheck)(auth) && !(0, _isEmpty["default"])(id))) {
              _context2.next = 25;
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
                value: projectId
              },
              check: 'notEmpty',
              message: _params["default"].common.message.error.invalidData
            }, {
              data: {
                value: name
              },
              check: 'notEmpty',
              message: 'Please enter a valid name.'
            }, {
              data: {
                value: email
              },
              check: 'email',
              message: 'Please enter a valid email.'
            }, {
              data: {
                value: mobile
              },
              check: 'notEmpty',
              message: 'Please enter a valid mobile number.'
            }, {
              data: {
                value: experience
              },
              check: 'notEmpty',
              message: 'Please enter a valid experience in years.'
            }, {
              data: {
                value: resume
              },
              check: 'notEmpty',
              message: 'Please upload resume.'
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
            item = {
              projectId: projectId,
              name: name,
              email: email,
              mobile: mobile,
              experience: experience,
              resume: resume,
              salaryCurrent: salaryCurrent,
              salaryExpected: salaryExpected
            };

            if (!(0, _isEmpty["default"])(jobId)) {
              item.jobId = jobId;
            }

            _context2.next = 15;
            return _model3["default"].updateOne({
              _id: id
            }, {
              $set: item
            });

          case 15:
            candidate = _context2.sent;

            if (!candidate) {
              _context2.next = 19;
              break;
            }

            _context2.next = 19;
            return _model["default"].updateOne({
              organizationId: auth.user.organizationId,
              candidateId: id
            }, {
              projectId: projectId
            });

          case 19:
            return _context2.abrupt("return", {
              data: candidate
            });

          case 22:
            _context2.prev = 22;
            _context2.t1 = _context2["catch"](10);
            throw new Error(_params["default"].common.message.error.server);

          case 25:
            throw new Error(_params["default"].user.message.error.auth);

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 7], [10, 22]]);
  }));
  return _candidateUpdate.apply(this, arguments);
}

function candidateRemove(_x3) {
  return _candidateRemove.apply(this, arguments);
}

function _candidateRemove() {
  _candidateRemove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref3) {
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
            return _model3["default"].remove({
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
  return _candidateRemove.apply(this, arguments);
}
//# sourceMappingURL=mutation.js.map