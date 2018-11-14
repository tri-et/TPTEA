'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../models');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var resolvers = {
  RootQuery: {
    fetchModifiers: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, _ref) {
        var input = _ref.input;
        var menu;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                menu = new _models.Menu(input);
                _context.next = 3;
                return menu.getModifiers();

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchModifiers(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return fetchModifiers;
    }()
  },
  RootMutation: {}
};
exports.default = resolvers;