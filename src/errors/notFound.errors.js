"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const custom_errors_1 = __importDefault(require("./custom.errors"));
class NotFoundError extends custom_errors_1.default {
    constructor(message, errorCode) {
        super(message, errorCode, 404, null);
        this.statusCode = 404;
    }
}
exports.default = NotFoundError;
//# sourceMappingURL=notFound.errors.js.map