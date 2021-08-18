"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _database = _interopRequireDefault(require("./setup/server/database"));

var _middlewares = _interopRequireDefault(require("./setup/server/middlewares"));

var _upload = _interopRequireDefault(require("./setup/server/upload"));

var _endpoint = _interopRequireDefault(require("./setup/server/endpoint"));

var _start = _interopRequireDefault(require("./setup/server/start"));

// Imports
// App Imports
// Create express server
var server = (0, _express["default"])(); // Connect database

(0, _database["default"])(); // Setup middlewares

(0, _middlewares["default"])(server); // Setup uploads

(0, _upload["default"])(server); // Setup endpoint

(0, _endpoint["default"])(server); // Start server

(0, _start["default"])(server);
//# sourceMappingURL=index.js.map