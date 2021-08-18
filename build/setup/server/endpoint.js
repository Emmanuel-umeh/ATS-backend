"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _env = require("../config/env");

var _params = _interopRequireDefault(require("../config/params"));

var _authentication = _interopRequireDefault(require("./authentication"));

var _language = _interopRequireDefault(require("./language"));

var _modules = _interopRequireDefault(require("./modules"));

// App Imports
// Setup endpoint
function _default(server) {
  console.info('SETUP - Endpoint..'); // API endpoint

  server.all(_params["default"].endpoint.url, [_authentication["default"], _language["default"]], /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
      var result, _yield$modules$reques, _yield$modules$reques2, success, data, _yield$modules$reques3, message;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              result = {
                success: false,
                message: 'Please try again.',
                data: null
              }; // Check if operation to be called is set

              if (!request.body.operation) {
                _context.next = 19;
                break;
              }

              _context.prev = 2;
              _context.next = 5;
              return _modules["default"][request.body.operation]({
                params: request.body.params || {},
                fields: request.body.fields || {},
                auth: request.auth
              });

            case 5:
              _yield$modules$reques = _context.sent;
              _yield$modules$reques2 = _yield$modules$reques.success;
              success = _yield$modules$reques2 === void 0 ? true : _yield$modules$reques2;
              data = _yield$modules$reques.data;
              _yield$modules$reques3 = _yield$modules$reques.message;
              message = _yield$modules$reques3 === void 0 ? _params["default"].common.message.success["default"] : _yield$modules$reques3;
              // Operation executed successfully
              result.success = success;
              result.data = data;
              result.message = message;
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](2);
              result.message = _modules["default"][request.body.operation] === undefined ? "".concat(request.body.operation, " operation is not available.") : _context.t0.message;

            case 19:
              // Log info in development mode
              if (_env.NODE_ENV === 'development') {
                console.log(request.body);
                console.log(result.success, result.message);
              } // Send response


              response.send(result);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 16]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}
//# sourceMappingURL=endpoint.js.map