"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Admin = "\n  type Admin {\n    id: Int\n    username: String\n    password: String\n    roles:String\n  }\n  input AdminLoginInput {\n    username: String!\n    password: String!\n  }\n  input ReceivePaymentInput {\n    amount: Float!\n    jwtPayment: String!\n  }\n  type ReceivePayment {\n    balance: Float\n    username: String\n    chargedAmount: Float\n  }\n";
exports.default = Admin;