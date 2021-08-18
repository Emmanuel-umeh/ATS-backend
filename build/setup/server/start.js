"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _ip = _interopRequireDefault(require("ip"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _env = require("../config/env");

// Imports
// App Imports
// Start server
function _default(server) {
  console.info('SETUP - Starting server..');
  var serverProcess = server.listen(_env.PORT, function (error) {
    if (error) {
      console.error('ERROR - Unable to start server.');
    } else {
      console.info("INFO - Server started on");
      console.info("  Local   http://localhost:".concat(_env.PORT, " [").concat(_env.NODE_ENV, "]"));
      console.info("  Network http://".concat(_ip["default"].address(), ":").concat(_env.PORT, " [").concat(_env.NODE_ENV, "]"));
      console.info("  Datetime ".concat(new Date(), "\n"));
    }
  }); // Stop Server

  for (var _i = 0, _arr = ['SIGINT', 'SIGTERM']; _i < _arr.length; _i++) {
    var signal = _arr[_i];
    process.on(signal, function () {
      console.info('INFO - Shutting down server..');
      serverProcess.close(function () {
        console.info('INFO - Server has been shut down.');

        _mongoose["default"].connection.close(false, function () {
          console.info('INFO - Database disconnected.');
          process.exit(0);
        });
      });
    });
  }
}
//# sourceMappingURL=start.js.map