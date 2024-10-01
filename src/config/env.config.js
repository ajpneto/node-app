"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const env_validation_1 = require("../validation/env.validation");
const zod_1 = require("zod");
dotenv_1.default.config();
const validateEnv = () => {
    try {
        const envVars = env_validation_1.envSchema.parse(process.env);
        return {
            port: +envVars.PORT,
            env: envVars.NODE_ENV,
            MONGO_DB_URI: envVars.MONGO_DB_URI,
            X_API_Key: envVars.X_API_Key,
            jwtconfig: {
                accessSecret: envVars.JWT,
                refreshaccessSecret: envVars.JWT_REFRESH,
            },
            smtp: {
                host: envVars.SMTP_HOST,
                port: envVars.SMTP_PORT,
                service: envVars.SMTP_SERVICE,
                mail: envVars.SMTP_MAIL,
                password: envVars.SMTP_PASSWORD,
            },
        };
    }
    catch (error) {
        let message = undefined;
        if (error instanceof zod_1.ZodError) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            message = error.errors;
            console.error('Validation failed:', error.errors);
        }
        else {
            // message = error;
            console.error('Error parsing environment variables:', error);
        }
    }
};
exports.validateEnv = validateEnv;
//# sourceMappingURL=env.config.js.map