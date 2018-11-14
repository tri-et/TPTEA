'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../models');

var _util = require('../../util');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var resolvers = {
  RootQuery: {
    fetchGiftCards: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, __, _ref) {
        var loggedInUser = _ref.loggedInUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _util._authAdmin)(loggedInUser);
                _context.next = 3;
                return _models.GiftCard.findAll();

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchGiftCards(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return fetchGiftCards;
    }()
  },
  RootMutation: {
    genGiftCard: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, _ref3, _ref4) {
        var input = _ref3.input;
        var loggedInUser = _ref4.loggedInUser;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                (0, _util._authAdmin)(loggedInUser);
                return _context2.abrupt('return', (0, _util.genGiftCard)(input.amount, input.expiry));

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function genGiftCard(_x4, _x5, _x6) {
        return _ref5.apply(this, arguments);
      }

      return genGiftCard;
    }(),
    deleteGiftCards: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_, _ref6, _ref7) {
        var input = _ref6.input;
        var loggedInUser = _ref7.loggedInUser;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                (0, _util._authAdmin)(loggedInUser);
                _context3.next = 3;
                return _models.GiftCard.destroy({
                  where: {
                    id: {
                      $in: input
                    }
                  }
                });

              case 3:
                return _context3.abrupt('return', _context3.sent);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deleteGiftCards(_x7, _x8, _x9) {
        return _ref8.apply(this, arguments);
      }

      return deleteGiftCards;
    }(),
    createGiftCard: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_, _ref9, _ref10) {
        var _this = this;

        var input = _ref9.input;
        var loggedInUser = _ref10.loggedInUser;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                (0, _util._authAdmin)(loggedInUser);
                _context5.next = 3;
                return _models.GiftCard.create(input).then(function () {
                  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(giftCard) {
                    var code;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            code = (0, _util.genGiftCard)(giftCard.id);
                            _context4.next = 3;
                            return giftCard.update({ code: code }).then(function (giftCard) {
                              return giftCard;
                            });

                          case 3:
                            return _context4.abrupt('return', _context4.sent);

                          case 4:
                          case 'end':
                            return _context4.stop();
                        }
                      }
                    }, _callee4, _this);
                  }));

                  return function (_x13) {
                    return _ref12.apply(this, arguments);
                  };
                }());

              case 3:
                return _context5.abrupt('return', _context5.sent);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function createGiftCard(_x10, _x11, _x12) {
        return _ref11.apply(this, arguments);
      }

      return createGiftCard;
    }()
  },
  GiftCard: {
    userName: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(giftCard, _, _ref13) {
        var loggedInUser = _ref13.loggedInUser;
        var customer;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                (0, _util._authAdmin)(loggedInUser);
                _context6.next = 3;
                return giftCard.getCustomer();

              case 3:
                customer = _context6.sent;
                return _context6.abrupt('return', customer && customer.get('username'));

              case 5:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function userName(_x14, _x15, _x16) {
        return _ref14.apply(this, arguments);
      }

      return userName;
    }()
  }
};
exports.default = resolvers;