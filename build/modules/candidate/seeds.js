"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _model = _interopRequireDefault(require("../organization/model"));

var _model2 = _interopRequireDefault(require("../user/model"));

var _model3 = _interopRequireDefault(require("../project/model"));

var _model4 = _interopRequireDefault(require("../job/model"));

var _model5 = _interopRequireDefault(require("../interviewer/model"));

var _model6 = _interopRequireDefault(require("../interview/model"));

var _model7 = _interopRequireDefault(require("../kanban/model"));

var _model8 = _interopRequireDefault(require("./model"));

// App Imports
// Seeds
function _default() {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var user, organization, project, job, interviewer, candidates, _i, _arr, i, candidate, interview;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('SEED - Candidate..');
            console.log('SEED - Interview..');
            console.log('SEED - Kanban..');
            _context.next = 5;
            return _model2["default"].findOne({
              email: 'user@hiresmart.app'
            });

          case 5:
            user = _context.sent;
            _context.next = 8;
            return _model["default"].findOne();

          case 8:
            organization = _context.sent;
            _context.next = 11;
            return _model3["default"].findOne();

          case 11:
            project = _context.sent;
            _context.next = 14;
            return _model4["default"].findOne();

          case 14:
            job = _context.sent;
            _context.next = 17;
            return _model5["default"].findOne();

          case 17:
            interviewer = _context.sent;
            candidates = [{
              name: 'Arun Kumar',
              email: 'arun@hiresmart.app'
            }, {
              name: 'Rajesh Kumar',
              email: 'rajesh@hiresmart.app'
            }];
            _i = 0, _arr = [0, 1];

          case 20:
            if (!(_i < _arr.length)) {
              _context.next = 33;
              break;
            }

            i = _arr[_i];
            _context.next = 24;
            return _model8["default"].create({
              organizationId: organization._id,
              projectId: project._id,
              jobId: job._id,
              userId: user._id,
              name: candidates[i].name,
              email: candidates[i].email,
              mobile: '9876543210',
              experience: '5.5',
              resume: 'resume.pdf',
              salaryCurrent: '10 LPA',
              salaryExpected: '15 LPA'
            });

          case 24:
            candidate = _context.sent;
            _context.next = 27;
            return _model6["default"].create({
              organizationId: organization._id,
              projectId: project._id,
              candidateId: candidate._id,
              interviewerId: interviewer._id,
              userId: user._id,
              dateTime: '2018-06-01T00:00:00+05:30',
              mode: _params["default"].interview.modes[0].key
            });

          case 27:
            interview = _context.sent;
            _context.next = 30;
            return _model7["default"].create({
              organizationId: organization._id,
              projectId: project._id,
              candidateId: candidate._id,
              interviews: [interview._id],
              userId: user.id,
              status: _params["default"].kanban.columns[0].key,
              highlight: false
            });

          case 30:
            _i++;
            _context.next = 20;
            break;

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}
//# sourceMappingURL=seeds.js.map