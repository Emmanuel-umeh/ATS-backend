"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _multer = _interopRequireDefault(require("multer"));

var _fs = _interopRequireDefault(require("fs"));

var _params = _interopRequireDefault(require("../config/params.json"));

var _utils = require("../helpers/utils");

var _model = _interopRequireDefault(require("../../modules/candidate/model"));

// Imports
// App Imports
// File upload configurations and route
function _default(server) {
  console.info('SETUP - Upload..'); // Set destination

  var storage = _multer["default"].diskStorage({
    destination: _path["default"].join(__dirname, '..', '..', '..', _params["default"].candidate.resume.path),
    filename: function filename(request, file, callback) {
      callback(null, Date.now() + _path["default"].extname(file.originalname));
    }
  });

  var upload = (0, _multer["default"])({
    storage: storage
  }).single('file'); // Upload route

  server.post("/upload", function (request, response) {
    upload(request, response, function (error) {
      if (!error) {
        response.json({
          success: true,
          file: request.file.filename
        });
      } else {
        response.json({
          success: false,
          file: null
        });
      }
    });
  }); // Download route

  server.get('/download/:candidateId', /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
      var errorMessage, candidate, filePath, fileCheck, fileName;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              errorMessage = 'Sorry, the file you are trying to download does not exists.';
              _context.next = 3;
              return _model["default"].findOne({
                _id: request.params.candidateId
              });

            case 3:
              candidate = _context.sent;

              if (candidate) {
                filePath = _path["default"].join(__dirname, '..', '..', '..', _params["default"].candidate.resume.path, candidate.resume);

                try {
                  fileCheck = _fs["default"].existsSync(filePath);

                  if (fileCheck) {
                    fileName = (0, _utils.slug)(candidate.name) + _path["default"].extname(candidate.resume);
                    response.download(filePath, fileName);
                  } else {
                    response.send(errorMessage);
                  }
                } catch (error) {
                  response.send(errorMessage);
                }
              } else {
                response.send(errorMessage);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}
//# sourceMappingURL=upload.js.map