"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmail = isEmail;
exports.isEqual = isEqual;
exports.isLength = isLength;
exports.isLengthMin = isLengthMin;
exports.isLengthMax = isLengthMax;
exports["default"] = validate;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Validation methods
// Email
function isEmail(_ref) {
  var value = _ref.value;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

function isEmpty(_ref2) {
  var value = _ref2.value;
  return !value;
}

function isNotEmpty(_ref3) {
  var value = _ref3.value;
  return !!value;
} // Equal


function isEqual(_ref4) {
  var value1 = _ref4.value1,
      value2 = _ref4.value2;
  return value1 === value2;
} // Length


function isLength(_ref5) {
  var value = _ref5.value,
      length = _ref5.length;
  return value.length === length;
} // Length minimum


function isLengthMin(_ref6) {
  var value = _ref6.value,
      length = _ref6.length;
  return value.length >= length;
} // Length maximum


function isLengthMax(_ref7) {
  var value = _ref7.value,
      length = _ref7.length;
  return value.length <= length;
} // Validation


function validate() {
  var validations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var checks = {
    email: isEmail,
    empty: isEmpty,
    notEmpty: isNotEmpty,
    equal: isEqual,
    length: isLength,
    lengthMin: isLengthMin,
    lengthMax: isLengthMax
  };

  var _iterator = _createForOfIteratorHelper(validations),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var v = _step.value;

      if (v.not ? checks[v.check](v.data) : !checks[v.check](v.data)) {
        throw new Error(v.message);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
//# sourceMappingURL=validation.js.map