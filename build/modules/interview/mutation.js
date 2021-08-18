"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interviewCreate = interviewCreate;
exports.interviewUpdate = interviewUpdate;
exports.interviewRemove = interviewRemove;
exports.remind = remind;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _icalGenerator = _interopRequireDefault(require("ical-generator"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _utils = require("../../setup/helpers/utils");

var _validation = _interopRequireDefault(require("../../setup/helpers/validation"));

var _model = _interopRequireDefault(require("../activity/model"));

var _model2 = _interopRequireDefault(require("../kanban/model"));

var _model3 = _interopRequireDefault(require("./model"));

var _send = require("../email/send");

var _InterviewInvite = _interopRequireDefault(require("../candidate/email/InterviewInvite"));

var _InterviewInvite2 = _interopRequireDefault(require("../interviewer/email/InterviewInvite"));

var _InterviewReminder = _interopRequireDefault(require("../candidate/email/InterviewReminder"));

var _InterviewReminder2 = _interopRequireDefault(require("../interviewer/email/InterviewReminder"));

// Imports
// App Imports
// Email
// Create
function interviewCreate(_x) {
  return _interviewCreate.apply(this, arguments);
} // Update


function _interviewCreate() {
  _interviewCreate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var _ref$params, projectId, candidateId, interviewerId, dateTime, mode, _ref$params$note, note, _ref$params$invite, invite, auth, rules, interview, kanban, interviews;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$params = _ref.params, projectId = _ref$params.projectId, candidateId = _ref$params.candidateId, interviewerId = _ref$params.interviewerId, dateTime = _ref$params.dateTime, mode = _ref$params.mode, _ref$params$note = _ref$params.note, note = _ref$params$note === void 0 ? '' : _ref$params$note, _ref$params$invite = _ref$params.invite, invite = _ref$params$invite === void 0 ? true : _ref$params$invite, auth = _ref.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context.next = 34;
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
              message: 'Please select a candidate.'
            }, {
              data: {
                value: interviewerId
              },
              check: 'notEmpty',
              message: 'Please select an interviewer.'
            }, {
              data: {
                value: dateTime
              },
              check: 'notEmpty',
              message: 'Please select valid date and time.'
            }, {
              data: {
                value: mode
              },
              check: 'notEmpty',
              message: 'Please select valid mode.'
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
            return _model3["default"].create({
              organizationId: auth.user.organizationId,
              userId: auth.user._id,
              projectId: projectId,
              candidateId: candidateId,
              interviewerId: interviewerId,
              dateTime: dateTime,
              mode: mode,
              note: note
            });

          case 13:
            interview = _context.sent;

            if (!interview) {
              _context.next = 28;
              break;
            }

            _context.next = 17;
            return _model2["default"].findOne({
              organizationId: auth.user.organizationId,
              projectId: projectId,
              candidateId: candidateId
            });

          case 17:
            kanban = _context.sent;

            if (!kanban) {
              _context.next = 25;
              break;
            }

            // Update kanban
            interviews = kanban.interviews;
            interviews.push(interview._id);
            _context.next = 23;
            return _model2["default"].updateOne({
              _id: kanban._id
            }, {
              status: _params["default"].kanban.status.progress,
              interviews: interviews
            });

          case 23:
            _context.next = 27;
            break;

          case 25:
            _context.next = 27;
            return _model2["default"].create({
              organizationId: auth.user.organizationId,
              projectId: projectId,
              candidateId: candidateId,
              interviews: [interview._id],
              userId: auth.user._id,
              status: _params["default"].kanban.status.shortlisted,
              highlight: false
            });

          case 27:
            // Send emails
            sentEmails(invite, interview._id, auth, 'invite');

          case 28:
            return _context.abrupt("return", {
              data: interview
            });

          case 31:
            _context.prev = 31;
            _context.t1 = _context["catch"](10);
            throw new Error(_params["default"].common.message.error.server);

          case 34:
            throw new Error(_params["default"].user.message.error.auth);

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 7], [10, 31]]);
  }));
  return _interviewCreate.apply(this, arguments);
}

function interviewUpdate(_x2) {
  return _interviewUpdate.apply(this, arguments);
} // Delete


function _interviewUpdate() {
  _interviewUpdate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var _ref2$params, id, projectId, candidateId, interviewerId, dateTime, mode, _ref2$params$note, note, _ref2$params$invite, invite, auth, rules, interview, kanban, interviews;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref2$params = _ref2.params, id = _ref2$params.id, projectId = _ref2$params.projectId, candidateId = _ref2$params.candidateId, interviewerId = _ref2$params.interviewerId, dateTime = _ref2$params.dateTime, mode = _ref2$params.mode, _ref2$params$note = _ref2$params.note, note = _ref2$params$note === void 0 ? '' : _ref2$params$note, _ref2$params$invite = _ref2$params.invite, invite = _ref2$params$invite === void 0 ? true : _ref2$params$invite, auth = _ref2.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context2.next = 32;
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
                value: candidateId
              },
              check: 'notEmpty',
              message: 'Please select a candidate.'
            }, {
              data: {
                value: interviewerId
              },
              check: 'notEmpty',
              message: 'Please select an interviewer.'
            }, {
              data: {
                value: dateTime
              },
              check: 'notEmpty',
              message: 'Please select valid date and time.'
            }, {
              data: {
                value: mode
              },
              check: 'notEmpty',
              message: 'Please select valid mode.'
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
            return _model3["default"].updateOne({
              _id: id
            }, {
              $set: {
                projectId: projectId,
                candidateId: candidateId,
                interviewerId: interviewerId,
                dateTime: dateTime,
                mode: mode,
                note: note
              }
            });

          case 13:
            interview = _context2.sent;

            if (!interview) {
              _context2.next = 24;
              break;
            }

            _context2.next = 17;
            return _model2["default"].findOne({
              organizationId: auth.user.organizationId,
              projectId: projectId,
              candidateId: candidateId
            });

          case 17:
            kanban = _context2.sent;

            if (!kanban) {
              _context2.next = 24;
              break;
            }

            interviews = kanban.interviews;

            if (!(interviews.indexOf(id) === -1)) {
              _context2.next = 24;
              break;
            }

            interviews.push(id);
            _context2.next = 24;
            return _model2["default"].updateOne({
              _id: kanban._id
            }, {
              status: _params["default"].kanban.status.progress,
              interviews: interviews
            });

          case 24:
            _context2.next = 26;
            return sentEmails(invite, id, auth, 'update');

          case 26:
            return _context2.abrupt("return", {
              data: interview
            });

          case 29:
            _context2.prev = 29;
            _context2.t1 = _context2["catch"](10);
            throw new Error(_params["default"].common.message.error.server);

          case 32:
            throw new Error(_params["default"].user.message.error.auth);

          case 33:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 7], [10, 29]]);
  }));
  return _interviewUpdate.apply(this, arguments);
}

function interviewRemove(_x3) {
  return _interviewRemove.apply(this, arguments);
} // Remind


function _interviewRemove() {
  _interviewRemove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref3) {
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
            throw new Error('Please login to delete interview.');

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 7], [10, 17]]);
  }));
  return _interviewRemove.apply(this, arguments);
}

function remind(_x4) {
  return _remind.apply(this, arguments);
} // Email to Candidate and Interviewer


function _remind() {
  _remind = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref4) {
    var id, auth, rules, interview;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = _ref4.params.id, auth = _ref4.auth;

            if (!(0, _utils.authCheck)(auth)) {
              _context4.next = 22;
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
            return _model3["default"].findOne({
              _id: id,
              organizationId: auth.user.organizationId
            }).populate('organizationId').populate('candidateId').populate('interviewerId').populate('userId');

          case 13:
            interview = _context4.sent;
            _context4.next = 16;
            return sentEmails(true, id, auth, 'remind');

          case 16:
            return _context4.abrupt("return", {
              data: interview
            });

          case 19:
            _context4.prev = 19;
            _context4.t1 = _context4["catch"](10);
            throw new Error(_params["default"].common.message.error.server);

          case 22:
            throw new Error(_params["default"].user.message.error.auth);

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 7], [10, 19]]);
  }));
  return _remind.apply(this, arguments);
}

function sentEmails(_x5, _x6, _x7) {
  return _sentEmails.apply(this, arguments);
}

function _sentEmails() {
  _sentEmails = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(invite, interviewId, auth) {
    var type,
        interviewDetails,
        date,
        mode,
        subjectAction,
        subject,
        calendar,
        event,
        icalEvent,
        candidateProps,
        TemplateCandidate,
        interviewerProps,
        TemplateInterviewer,
        activityAction,
        _args5 = arguments;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            type = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : 'invite';
            _context5.next = 3;
            return _model3["default"].findOne({
              _id: interviewId,
              organizationId: auth.user.organizationId
            }).populate('organizationId').populate('candidateId').populate('interviewerId').populate('userId');

          case 3:
            interviewDetails = _context5.sent;
            date = (0, _moment["default"])(interviewDetails.dateTime).format("".concat(_params["default"].date.format.nice.date, ", ").concat(_params["default"].date.format.nice.time));

            if (!invite) {
              _context5.next = 21;
              break;
            }

            mode = _params["default"].interview.modes.filter(function (item) {
              return item.key === interviewDetails.mode;
            })[0].name;
            subjectAction = {
              invite: 'Invitation',
              update: 'Updated',
              remind: 'Reminder'
            }[type];
            subject = "".concat(interviewDetails.organizationId.name, " Interview ").concat(subjectAction, " - ").concat(date); // Calendar

            calendar = (0, _icalGenerator["default"])({
              method: 'publish',
              domain: interviewDetails.organizationId.domain,
              name: subject
            });
            event = calendar.createEvent({
              domain: interviewDetails.organizationId.domain,
              start: (0, _moment["default"])(interviewDetails.dateTime).toDate(),
              end: (0, _moment["default"])(interviewDetails.dateTime).add(1, 'hour').toDate(),
              summary: subject,
              location: mode,
              description: interviewDetails.note
            });
            event.organizer({
              name: auth.user.name,
              email: auth.user.email
            });
            icalEvent = {
              content: calendar.toString()
            }; // Send emails
            // 1. To Candidate

            candidateProps = {
              candidateName: interviewDetails.candidateId.name,
              date: date,
              organizationName: interviewDetails.organizationId.name,
              mode: mode,
              note: interviewDetails.note,
              userName: auth.user.name
            };
            TemplateCandidate = {
              invite: /*#__PURE__*/_react["default"].createElement(_InterviewInvite["default"], candidateProps),
              update: /*#__PURE__*/_react["default"].createElement(_InterviewInvite["default"], candidateProps),
              remind: /*#__PURE__*/_react["default"].createElement(_InterviewReminder["default"], candidateProps)
            }[type];
            _context5.next = 17;
            return (0, _send.send)({
              to: {
                name: interviewDetails.candidateId.name,
                email: interviewDetails.candidateId.email
              },
              from: auth.user,
              cc: auth.user,
              subject: subject,
              template: TemplateCandidate,
              organizationId: auth.user.organizationId,
              userId: auth.user._id,
              icalEvent: icalEvent
            });

          case 17:
            // 2. To Interviewer
            interviewerProps = {
              interviewId: interviewId,
              interviewerName: interviewDetails.interviewerId.name,
              candidateId: interviewDetails.candidateId._id,
              candidateName: interviewDetails.candidateId.name,
              date: date,
              organizationName: interviewDetails.organizationId.name,
              mode: mode,
              note: interviewDetails.note,
              userName: auth.user.name
            };
            TemplateInterviewer = {
              invite: /*#__PURE__*/_react["default"].createElement(_InterviewInvite2["default"], interviewerProps),
              update: /*#__PURE__*/_react["default"].createElement(_InterviewInvite2["default"], interviewerProps),
              remind: /*#__PURE__*/_react["default"].createElement(_InterviewReminder2["default"], interviewerProps)
            }[type];
            _context5.next = 21;
            return (0, _send.send)({
              to: {
                name: interviewDetails.interviewerId.name,
                email: interviewDetails.interviewerId.email
              },
              from: auth.user,
              cc: auth.user,
              subject: subject,
              template: TemplateInterviewer,
              organizationId: auth.user.organizationId,
              userId: auth.user._id,
              icalEvent: icalEvent
            });

          case 21:
            // Log activity
            activityAction = {
              invite: 'scheduled an',
              update: 'updated the ',
              remind: 'sent a reminder for the'
            }[type];
            _context5.next = 24;
            return _model["default"].create({
              organizationId: auth.user.organizationId,
              userId: auth.user._id,
              projectId: interviewDetails.projectId,
              interviewId: interviewDetails._id,
              candidateId: interviewDetails.candidateId._id,
              interviewerId: interviewDetails.interviewerId._id,
              action: _params["default"].activity.types.create,
              message: "".concat(auth.user.name, " ").concat(activityAction, " interview for ").concat(interviewDetails.candidateId.name, " to be conducted by ").concat(interviewDetails.interviewerId.name, " on ").concat(date, ".")
            });

          case 24:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _sentEmails.apply(this, arguments);
}
//# sourceMappingURL=mutation.js.map