"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.send = send;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _env = require("../../setup/config/env");

var _params = _interopRequireDefault(require("../../setup/config/params"));

var _model = _interopRequireDefault(require("./model"));

var _view = _interopRequireDefault(require("./template/view"));

var _Layout = _interopRequireDefault(require("./template/Layout"));

// Imports
// App Imports
// email
function transport() {
  if (_env.EMAIL_HOST && _env.EMAIL_USER && _env.EMAIL_PASSWORD) {
    return _nodemailer["default"].createTransport({
      host: _env.EMAIL_HOST,
      secure: false,
      auth: {
        user: _env.EMAIL_USER,
        pass: _env.EMAIL_PASSWORD
      }
    });
  }
}

function send(_x) {
  return _send.apply(this, arguments);
}

function _send() {
  _send = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var to, from, subject, template, _ref$cc, cc, _ref$organizationId, organizationId, _ref$userId, userId, _ref$icalEvent, icalEvent, transporter, body, toEmail, toAddress, email, emailSave;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            to = _ref.to, from = _ref.from, subject = _ref.subject, template = _ref.template, _ref$cc = _ref.cc, cc = _ref$cc === void 0 ? null : _ref$cc, _ref$organizationId = _ref.organizationId, organizationId = _ref$organizationId === void 0 ? '' : _ref$organizationId, _ref$userId = _ref.userId, userId = _ref$userId === void 0 ? '' : _ref$userId, _ref$icalEvent = _ref.icalEvent, icalEvent = _ref$icalEvent === void 0 ? '' : _ref$icalEvent;
            transporter = transport();

            if (!transporter) {
              _context.next = 20;
              break;
            }

            // Create markup
            body = (0, _view["default"])((0, _server.renderToStaticMarkup)( /*#__PURE__*/_react["default"].createElement(_Layout["default"], null, template)));
            subject = "".concat(_params["default"].site.name, " - ").concat(subject);
            toEmail = _env.NODE_ENV === 'development' ? _env.EMAIL_TEST : to.email;
            toAddress = to.name && to.name.length > 0 ? "\"".concat(to.name, "\" <").concat(toEmail, ">") : toEmail;
            email = {
              to: toAddress,
              from: "\"".concat(from.name, "\" <").concat(_params["default"].site.emails.hello.email, ">"),
              replyTo: "\"".concat(from.name, "\" <").concat(from.email, ">"),
              subject: subject,
              html: body
            };

            if (cc) {
              email.cc = "\"".concat(cc.name, "\" <").concat(_env.NODE_ENV === 'development' ? _env.EMAIL_TEST : cc.email, ">");
            }

            if (icalEvent) {
              email.icalEvent = icalEvent;
            } // Send email


            if (_env.EMAIL_ON === '1') {
              transporter.sendMail(email, function () {
                console.info('INFO - Email sent.');
              });
            } else {
              console.info('INFO - Email not sent. EMAIL_ON is not enabled.');
            } // Save into database


            emailSave = {
              toEmail: to.email,
              fromName: from.name,
              fromEmail: from.email,
              subject: subject,
              body: body
            };

            if (to.name && to.name.length > 0) {
              emailSave.toName = to.name;
            }

            if (organizationId) {
              emailSave.organizationId = organizationId;
            }

            if (userId) {
              emailSave.userId = userId;
            }

            _context.next = 17;
            return _model["default"].create(emailSave);

          case 17:
            return _context.abrupt("return", _context.sent);

          case 20:
            console.warn('WARN - Email not sent. Please check `.env` to set email configurations.');

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _send.apply(this, arguments);
}
//# sourceMappingURL=send.js.map