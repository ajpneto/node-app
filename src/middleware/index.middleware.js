"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundMiddleware = notFoundMiddleware;
exports.errorHandlerMiddleware = errorHandlerMiddleware;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
function notFoundMiddleware(req, res, next) {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorHandlerMiddleware(err, req, res, next) {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
}
//# sourceMappingURL=index.middleware.js.map