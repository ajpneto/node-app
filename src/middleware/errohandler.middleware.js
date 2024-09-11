"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const custom_errors_1 = __importDefault(require("../errors/custom.errors"));
const errorHandlerMiddleware = (err, req, res, next) => {
    const defaultError = {
        statusCode: err.statusCode || 500,
        msg: err.message || "Something went wrong, try again later",
    };
    if (err instanceof custom_errors_1.default) {
        return res
            .status(defaultError.statusCode)
            .json({ message: defaultError.msg, sucess: false });
    }
    console.log(err.message);
    if (err.name === "ValidationError") {
        defaultError.statusCode = 500;
        defaultError.msg = Object.values(err.errors)
            .map((item) => item === null || item === void 0 ? void 0 : item.message)
            .join(",");
    }
    if (err.name = 'CastError') {
        defaultError.statusCode = 400;
        defaultError.msg = `Resourse not found. Invalid :${err.path}`;
    }
    if (err.code && err.code === 11000) {
        defaultError.statusCode = 400;
        defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`;
    }
    res
        .status(defaultError.statusCode)
        .json({ message: defaultError.msg, sucess: false });
};
exports.default = errorHandlerMiddleware;
//# sourceMappingURL=errohandler.middleware.js.map