"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _env = require("../config/env");

var _database = _interopRequireDefault(require("../server/database"));

var _seed = _interopRequireDefault(require("../../modules/organization/seed"));

var _seed2 = _interopRequireDefault(require("../../modules/user/seed"));

var _seeds = _interopRequireDefault(require("../../modules/project/seeds"));

var _seeds2 = _interopRequireDefault(require("../../modules/job/seeds"));

var _seeds3 = _interopRequireDefault(require("../../modules/interviewer/seeds"));

var _seeds4 = _interopRequireDefault(require("../../modules/candidate/seeds"));

// Imports
// App Imports
// Seeder
function seeder() {
  return _seeder.apply(this, arguments);
} // Run seeder


function _seeder() {
  _seeder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('SEED - Started');
            _context.next = 3;
            return (0, _database["default"])();

          case 3:
            if (!(_env.NODE_ENV === 'development')) {
              _context.next = 7;
              break;
            }

            // @temp allow reset database
            console.log('SEED - Dropping database.. ❗');
            _context.next = 7;
            return _mongoose["default"].connection.dropDatabase();

          case 7:
            _context.next = 9;
            return (0, _seed["default"])();

          case 9:
            _context.next = 11;
            return (0, _seed2["default"])();

          case 11:
            _context.next = 13;
            return (0, _seeds["default"])();

          case 13:
            _context.next = 15;
            return (0, _seeds2["default"])();

          case 15:
            _context.next = 17;
            return (0, _seeds3["default"])();

          case 17:
            _context.next = 19;
            return (0, _seeds4["default"])();

          case 19:
            // Close connection
            _mongoose["default"].connection.close();

            console.log('SEED - Complete. ✅');

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _seeder.apply(this, arguments);
}

seeder();
//# sourceMappingURL=seeder.js.map