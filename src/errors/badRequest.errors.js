"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const custom_errors_1 = __importDefault(require("./custom.errors"));
class BadRequestError extends custom_errors_1.default {
    constructor(message, errorCode) {
        super(message, errorCode, 400, null);
        this.statusCode = 400;
    }
}
exports.default = BadRequestError;
//# sourceMappingURL=badRequest.errors.js.map