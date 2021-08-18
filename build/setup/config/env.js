"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EMAIL_PASSWORD = exports.EMAIL_USER = exports.EMAIL_HOST = exports.EMAIL_TEST = exports.EMAIL_ON = exports.API_URL = exports.MOBILE_URL = exports.WEB_URL = exports.MONGO_URL = exports.PORT = exports.SECURITY_SALT_ROUNDS = exports.SECURITY_SECRET = exports.NODE_ENV = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

// Imports
// Load .env
_dotenv["default"].config({
  path: '.env.local'
}); // Environment


var NODE_ENV = process.env.NODE_ENV; // Security

exports.NODE_ENV = NODE_ENV;
var SECURITY_SECRET = process.env.SECURITY_SECRET;
exports.SECURITY_SECRET = SECURITY_SECRET;
var SECURITY_SALT_ROUNDS = parseInt(process.env.SECURITY_SALT_ROUNDS); // Port

exports.SECURITY_SALT_ROUNDS = SECURITY_SALT_ROUNDS;
var PORT = process.env.PORT; // Database

exports.PORT = PORT;
var MONGO_URL = process.env.MONGO_URL; // URL

exports.MONGO_URL = MONGO_URL;
var WEB_URL = process.env.WEB_URL;
exports.WEB_URL = WEB_URL;
var MOBILE_URL = process.env.MOBILE_URL;
exports.MOBILE_URL = MOBILE_URL;
var API_URL = process.env.API_URL; // Email

exports.API_URL = API_URL;
var EMAIL_ON = process.env.EMAIL_ON;
exports.EMAIL_ON = EMAIL_ON;
var EMAIL_TEST = process.env.EMAIL_TEST;
exports.EMAIL_TEST = EMAIL_TEST;
var EMAIL_HOST = process.env.EMAIL_HOST;
exports.EMAIL_HOST = EMAIL_HOST;
var EMAIL_USER = process.env.EMAIL_USER;
exports.EMAIL_USER = EMAIL_USER;
var EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
exports.EMAIL_PASSWORD = EMAIL_PASSWORD;
//# sourceMappingURL=env.js.map