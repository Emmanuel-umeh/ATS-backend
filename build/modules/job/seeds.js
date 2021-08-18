"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _model = _interopRequireDefault(require("../organization/model"));

var _model2 = _interopRequireDefault(require("../user/model"));

var _model3 = _interopRequireDefault(require("../project/model"));

var _model4 = _interopRequireDefault(require("./model"));

// App Imports
// Seeds
function _default() {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var user, organization, projects;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('SEED - Job..');
            _context.next = 3;
            return _model2["default"].findOne({
              email: 'user@hiresmart.app'
            });

          case 3:
            user = _context.sent;
            _context.next = 6;
            return _model["default"].findOne();

          case 6:
            organization = _context.sent;
            _context.next = 9;
            return _model3["default"].find();

          case 9:
            projects = _context.sent;
            _context.next = 12;
            return _model4["default"].create({
              organizationId: organization._id,
              projectId: projects[0]._id,
              userId: user._id,
              role: 'Software Engineer',
              description: 'ReactJS and NodeJS'
            });

          case 12:
            _context.next = 14;
            return _model4["default"].create({
              organizationId: organization._id,
              projectId: projects[1]._id,
              userId: user._id,
              role: 'UI Designer',
              description: 'Prototyping, InVision, Adobe'
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}
//# sourceMappingURL=seeds.js.map