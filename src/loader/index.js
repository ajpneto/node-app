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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const app_1 = require("./app");
const logger_1 = require("../config/logger");
const env_config_1 = require("../config/env.config");
const mongoose_1 = require("../config/mongoose");
const event_emitter_1 = require("../config/event-emitter");
const auth_subscriber_1 = require("../subscriber/auth.subscriber");
const bootstrap = (app) => __awaiter(void 0, void 0, void 0, function* () {
    (0, env_config_1.validateEnv)();
    yield (0, mongoose_1.connectToDB)();
    (0, app_1.bootstrapExpress)(app);
    logger_1.logger.info('Express app initiated.');
    event_emitter_1.EventEmitterInstance.on("signup", auth_subscriber_1.signUpSubscriber);
    event_emitter_1.EventEmitterInstance.on("forgot", auth_subscriber_1.forgetPasswordSubscriber);
});
exports.bootstrap = bootstrap;
//# sourceMappingURL=index.js.map