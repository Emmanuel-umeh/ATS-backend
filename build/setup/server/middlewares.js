"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _env = require("../config/env");

// Imports
// App Imports
// Setup middlewares
function _default(server) {
  console.info('SETUP - Middlewares..'); // Enable CORS

  server.use((0, _cors["default"])({
    origin: [_env.WEB_URL, _env.MOBILE_URL],
    "default": _env.WEB_URL
  })); // Request body parser

  server.use(_bodyParser["default"].json());
  server.use(_bodyParser["default"].urlencoded({
    extended: false
  })); // Request body cookie parser

  server.use((0, _cookieParser["default"])()); // Static files folder

  server.use(_express["default"]["static"](_path["default"].join(__dirname, '..', '..', '..', 'public'))); // HTTP logger

  if (_env.NODE_ENV === 'development') {
    server.use((0, _morgan["default"])('tiny'));
  }
}
//# sourceMappingURL=middlewares.js.map