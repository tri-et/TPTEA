"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GiftCard = "\n  type GiftCard {\n    id: Int\n    code: String\n    userName: String\n    amount: Int\n    expiry: Int\n    createdAt: Date\n  }\n\n  input GiftCardInput {\n    id: Int\n    amount: Int!\n    expiry: Int!\n  }\n\n  input GenGiftCardInput {\n    amount: Int!\n    expiry: Int!\n  }\n";
exports.default = GiftCard;