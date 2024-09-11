"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
class CustomAPIError extends Error {
    constructor(message, errorCode, statusCode, error) {
        super(message);
        this.message = message;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.error = error;
    }
}
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NOT_FOUND"] = 1001] = "NOT_FOUND";
    ErrorCode[ErrorCode["ALREADY_EXST"] = 1002] = "ALREADY_EXST";
    ErrorCode[ErrorCode["FORBIDDEN"] = 1003] = "FORBIDDEN";
    ErrorCode[ErrorCode["INTERNAL_SERVER"] = 1005] = "INTERNAL_SERVER";
    ErrorCode[ErrorCode["TOO_MANY_REQUEST"] = 1006] = "TOO_MANY_REQUEST";
    ErrorCode[ErrorCode["BAD_REQUEST"] = 1007] = "BAD_REQUEST";
    ErrorCode[ErrorCode["UNAUTHENTICATED_USER"] = 1008] = "UNAUTHENTICATED_USER";
    ErrorCode[ErrorCode["TOKEN_NOT_FOUND"] = 1009] = "TOKEN_NOT_FOUND";
    ErrorCode[ErrorCode["TOKEN_EXPIRE"] = 1010] = "TOKEN_EXPIRE";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
exports.default = CustomAPIError;
//# sourceMappingURL=custom.errors.js.map