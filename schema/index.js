'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _def = require('./customer/def');

var _def2 = _interopRequireDefault(_def);

var _res = require('./customer/res');

var _res2 = _interopRequireDefault(_res);

var _def3 = require('./category/def');

var _def4 = _interopRequireDefault(_def3);

var _res3 = require('./category/res');

var _res4 = _interopRequireDefault(_res3);

var _def5 = require('./menu/def');

var _def6 = _interopRequireDefault(_def5);

var _res5 = require('./menu/res');

var _res6 = _interopRequireDefault(_res5);

var _def7 = require('./modify/def');

var _def8 = _interopRequireDefault(_def7);

var _res7 = require('./modify/res');

var _res8 = _interopRequireDefault(_res7);

var _def9 = require('./admin/def');

var _def10 = _interopRequireDefault(_def9);

var _res9 = require('./admin/res');

var _res10 = _interopRequireDefault(_res9);

var _def11 = require('./giftcard/def');

var _def12 = _interopRequireDefault(_def11);

var _res11 = require('./giftcard/res');

var _res12 = _interopRequireDefault(_res11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SchemaDefinition = '\n  schema {\n    query: RootQuery,\n    mutation: RootMutation\n  }\n';

var RootQuery = '\n  type RootQuery {\n    getCustomer(input:Int): Customer\n    listCategories: [Category]\n    listMenus(input:CategoryInput): [Menu]\n    fetchModifiers(input:MenuInput): [Modify]\n    fetchAdmin(input:Int): Admin\n    fetchCustomers: [Customer]\n    fetchGiftCards: [GiftCard]\n    genCustomerPaymentId(input:Int): String\n    verifyCustomerPaymentId(input:String): Customer\n  }\n';

var RootMutation = '\n  type RootMutation {\n    login(input:LoginInput): String\n    register(input:RegisterInput): String\n    loginFb(input:LoginInput): String\n    registerFb(input:RegisterInput): RegisterFbResponse\n    loginAdmin(input:AdminLoginInput): String\n    deleteCustomers(input:[Int]): Int\n    updateCustomer(input:CustomerInput): Customer\n    createCustomer(input:CustomerInput): Customer\n    genGiftCard(input:GenGiftCardInput): String\n    deleteGiftCards(input:[Int]): Int\n    createGiftCard(input:GiftCardInput): GiftCard\n    applyGiftCard(input:ApplyGiftCardInput): ApplyGiftCardOutput\n    receivePayment(input:ReceivePaymentInput): ReceivePayment\n  }\n';

exports.default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation, _def2.default, _def4.default, _def6.default, _def8.default, _def10.default, _def12.default],
  resolvers: [_res2.default, _res4.default, _res6.default, _res8.default, _res10.default, _res12.default]
});