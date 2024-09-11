"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalSeverError = exports.NotFoundError = exports.ForbiddenError = exports.BadRequestError = void 0;
const badRequest_errors_1 = __importDefault(require("./badRequest.errors"));
exports.BadRequestError = badRequest_errors_1.default;
const forbidden_errors_1 = __importDefault(require("./forbidden.errors"));
exports.ForbiddenError = forbidden_errors_1.default;
const notFound_errors_1 = __importDefault(require("./notFound.errors"));
exports.NotFoundError = notFound_errors_1.default;
const internalServer_errors_1 = __importDefault(require("./internalServer.errors"));
exports.InternalSeverError = internalServer_errors_1.default;
//# sourceMappingURL=index.errors.js.map