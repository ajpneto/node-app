"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const custom_errors_1 = __importDefault(require("./custom.errors"));
class InternalserverError extends custom_errors_1.default {
    constructor(message, errorCode) {
        super(message, errorCode, 500, null);
        this.statusCode = 500;
    }
}
exports.default = InternalserverError;
//# sourceMappingURL=internalServer.errors.js.map