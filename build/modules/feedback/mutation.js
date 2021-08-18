"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.feedbackCreateOrUpdate = feedbackCreateOrUpdate;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _model = _interopRequireDefault(require("../activity/model"));

var _model2 = _interopRequireDefault(require("../interview/model"));

var _model3 = _interopRequireDefault(require("../kanban/model"));

var _model4 = _interopRequireDefault(require("./model"));

var _send = require("../email/send");

var _Feedback = _interopRequireDefault(require("./email/Feedback"));

// Imports
// App Imports
// Email
// Create
function feedbackCreateOrUpdate(_x) {
  return _feedbackCreateOrUpdate.apply(this, arguments);
}

function _feedbackCreateOrUpdate() {
  _feedbackCreateOrUpdate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var _ref$params, interviewId, text, status, rules, interview, feedback;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$params = _ref.params, interviewId = _ref$params.interviewId, text = _ref$params.text, status = _ref$params.status;
            // Validation rules
            rules = [{
              data: {
                value: interviewId
              },
              check: 'notEmpty',
              message: _params["default"].common.message.error.invalidData
            }, {
              data: {
                value: text
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
            return _model2["default"].findOne({
              _id: interviewId
            }).populate('candidateId').populate('interviewerId').populate('userId');

          case 12:
            interview = _context.sent;

            if (!interview) {
              _context.next = 34;
              break;
            }

            _context.next = 16;
            return _model4["default"].findOne({
              interviewId: interviewId
            });

          case 16:
            feedback = _context.sent;
            _context.next = 19;
            return _model3["default"].updateOne({
              organizationId: interview.organizationId,
              projectId: interview.projectId,
              candidateId: interview.candidateId
            }, {
              $set: {
                status: status
              }
            });

          case 19:
            if (!feedback) {
              _context.next = 24;
              break;
            }

            _context.next = 22;
            return _model4["default"].updateOne({
              interviewId: interviewId
            }, {
              $set: {
                text: text,
                status: status
              }
            });

          case 22:
            _context.next = 29;
            break;

          case 24:
            _context.next = 26;
            return _model4["default"].create({
              organizationId: interview.organizationId,
              interviewId: interviewId,
              text: text,
              status: status
            });

          case 26:
            feedback = _context.sent;
            _context.next = 29;
            return _model["default"].create({
              organizationId: interview.organizationId,
              userId: interview.userId._id,
              projectId: interview.projectId,
              interviewId: interviewId,
              action: _params["default"].activity.types.create,
              message: "".concat(interview.interviewerId.name, " submitted feedback for ").concat(interview.candidateId.name, ".")
            });

          case 29:
            _context.next = 31;
            return _model2["default"].updateOne({
              _id: interview._id
            }, {
              feedbackId: feedback._id
            });

          case 31:
            _context.next = 33;
            return (0, _send.send)({
              to: {
                name: interview.userId.name,
                email: interview.userId.email
              },
              from: {
                name: interview.interviewerId.name,
                email: interview.interviewerId.email
              },
              subject: "Feedback Received for ".concat(interview.candidateId.name),
              template: /*#__PURE__*/_react["default"].createElement(_Feedback["default"], {
                interview: interview,
                text: text,
                status: status
              })
            });

          case 33:
            return _context.abrupt("return", {
              data: feedback
            });

          case 34:
            _context.next = 39;
            break;

          case 36:
            _context.prev = 36;
            _context.t1 = _context["catch"](9);
            throw new Error(_params["default"].common.message.error.server);

          case 39:
            throw new Error(_params["default"].common.message.error["default"]);

          case 40:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 6], [9, 36]]);
  }));
  return _feedbackCreateOrUpdate.apply(this, arguments);
}
//# sourceMappingURL=mutation.js.map