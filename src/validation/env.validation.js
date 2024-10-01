"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
const zod_1 = require("zod");
exports.envSchema = zod_1.z.object({
    PORT: zod_1.z.string({ required_error: "Port number is required" }),
    NODE_ENV: zod_1.z.enum(['development', "production", "test"]),
    MONGO_DB_URI: zod_1.z.string({ required_error: "Db url is required" }),
    JWT: zod_1.z.string({ required_error: "JWT is required" }),
    JWT_REFRESH: zod_1.z.string({ required_error: "JWT Refres is required" }),
    SMTP_HOST: zod_1.z.string().min(1, { message: "SMTP_HOST is required" }),
    SMTP_PORT: zod_1.z.string().min(1, { message: "SMTP_PORT is required" }),
    SMTP_SERVICE: zod_1.z.string().min(1, { message: "SMTP_SERVICE is required" }),
    SMTP_MAIL: zod_1.z.string().min(1, { message: "SMTP_MAIL is required" }),
    SMTP_PASSWORD: zod_1.z.string().min(1, { message: "SMTP_PASSWORD is required" }),
    X_API_Key: zod_1.z.string().min(1, { message: "X-API-Key is required" })
});
//# sourceMappingURL=env.validation.js.map