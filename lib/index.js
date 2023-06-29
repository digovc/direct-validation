"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validation_1 = __importDefault(require("./validation"));
var validate = function (value, defaultMessage) {
    if (defaultMessage === void 0) { defaultMessage = ''; }
    return new validation_1.default(value, defaultMessage);
};
exports.default = validate;
