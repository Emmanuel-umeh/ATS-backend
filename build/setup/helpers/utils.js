"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slug = slug;
exports.randomNumber = randomNumber;
exports.authCheck = authCheck;
exports.authCheckAdmin = authCheckAdmin;
exports.noop = void 0;

var _params = _interopRequireDefault(require("../config/params"));

// App Imports
// Utility functions
// Slug
function slug(text) {
  return text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
  .replace(/[^\w\-]+/g, '') // Remove all non-word chars
  //.replace(/\-\-+/g, '-')         // Replace multiple - with single -
  .replace(/^-+/, '') // Trim - from start of text
  .replace(/-+$/, ''); // Trim - from end of text
} // Generate random number


function randomNumber(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
} // Auth check user


function authCheck(auth) {
  return auth && auth.user && auth.user._id;
} // Auth check Admin


function authCheckAdmin(auth) {
  return authCheck(auth) && auth.user.role === _params["default"].user.roles.admin.key;
} // No operation


var noop = function noop() {};

exports.noop = noop;
//# sourceMappingURL=utils.js.map