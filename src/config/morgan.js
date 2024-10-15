"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.successHandler = exports.errorHandler = void 0;
const fs_1 = require("fs");
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const env_config_1 = require("./env.config");
const nodeEnv = (_a = (0, env_config_1.validateEnv)()) === null || _a === void 0 ? void 0 : _a.env;
const getIPFormat = () => nodeEnv === 'production' ? ':remote-addr - ' : '';
const accessLogStream = (0, fs_1.createWriteStream)(path_1.default.join(__dirname, "..", 'logs/access.log'), { flags: 'a' });
const successResponseFormat = `${getIPFormat()} :method :url :status :response-time ms :user-agent :date`;
const successHandler = (0, morgan_1.default)(successResponseFormat, {
    stream: accessLogStream,
    skip: (req, res) => res.statusCode >= 400,
});
exports.successHandler = successHandler;
const errorResponseFormat = `${getIPFormat()} :method :url :status :response-time ms :user-agent :date `;
const errorHandler = (0, morgan_1.default)(errorResponseFormat, {
    stream: accessLogStream,
    skip: (req, res) => res.statusCode < 400,
});
exports.errorHandler = errorHandler;
//# sourceMappingURL=morgan.js.map