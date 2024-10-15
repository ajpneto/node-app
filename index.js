"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const logger_1 = require("./src/config/logger");
const env_config_1 = require("./src/config/env.config");
const mongoose_1 = __importDefault(require("mongoose"));
const loader_1 = require("./src/loader");
const exitHandler = (server) => {
    if (server) {
        server.close(() => __awaiter(void 0, void 0, void 0, function* () {
            logger_1.logger.info('Server closed');
            process.exit(1);
        }));
    }
    else {
        process.exit(1);
    }
};
const unExpectedErrorHandler = (server) => {
    return function (error) {
        logger_1.logger.error(error);
        exitHandler(server);
    };
};
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    yield (0, loader_1.bootstrap)(app);
    const httpServer = (0, http_1.createServer)(app);
    const port = (0, env_config_1.validateEnv)().port;
    const server = httpServer.listen(port, () => {
        logger_1.logger.info(`server listening on port ${port}`);
    });
    process.on('uncaughtException', unExpectedErrorHandler(server));
    process.on('unhandledRejection', unExpectedErrorHandler(server));
    process.on('SIGTERM', () => {
        logger_1.logger.info('SIGTERM recieved');
        if (server) {
            server.close();
        }
    });
    mongoose_1.default.connection.on("error", (err) => {
        console.log(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`);
    });
});
startServer();
//# sourceMappingURL=index.js.map