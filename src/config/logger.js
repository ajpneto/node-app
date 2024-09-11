"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const env_config_1 = require("./env.config");
const { format, createLogger, transports } = winston_1.default;
const { printf, combine, timestamp, colorize, uncolorize } = format;
const nodeEnv = (_a = (0, env_config_1.validateEnv)()) === null || _a === void 0 ? void 0 : _a.env;
const winstonFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp}: ${level}: ${stack || message}`;
});
exports.logger = createLogger({
    level: nodeEnv === 'development' ? 'debug' : 'info',
    format: combine(timestamp(), winstonFormat, nodeEnv === 'development' ? colorize() : uncolorize()),
    transports: [new transports.Console()],
});
//# sourceMappingURL=logger.js.map