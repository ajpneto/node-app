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
exports.AuthJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const unauthenticated_errors_1 = __importDefault(require("../errors/unauthenticated.errors"));
const forbidden_errors_1 = __importDefault(require("../errors/forbidden.errors"));
const custom_errors_1 = require("../errors/custom.errors");
const env_config_1 = require("../config/env.config");
const user_services_1 = require("../services/user.services");
const notFound_errors_1 = __importDefault(require("../errors/notFound.errors"));
const AuthJWT = (req, res, next) => {
    var _a;
    /*  const token = req.cookies.access_token;
    console.log(token);
      if (!token) {
        return res.sendStatus(403);
      }*/
    try {
        const jwtconfig = (_a = (0, env_config_1.validateEnv)()) === null || _a === void 0 ? void 0 : _a.jwtconfig;
        const token = req.cookies.access_token; //extractTokenfromHeader(req)
        if (!token)
            throw new unauthenticated_errors_1.default("Provide token", custom_errors_1.ErrorCode.TOKEN_NOT_FOUND);
        jsonwebtoken_1.default.verify(token, jwtconfig === null || jwtconfig === void 0 ? void 0 : jwtconfig.accessSecret, (err, decoded) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            if (err)
                return next(new forbidden_errors_1.default("Token expires", custom_errors_1.ErrorCode === null || custom_errors_1.ErrorCode === void 0 ? void 0 : custom_errors_1.ErrorCode.TOKEN_EXPIRE));
            const decodeData = decoded;
            const userWithPermission = yield (0, user_services_1.findExtendedUsers)(decodeData === null || decodeData === void 0 ? void 0 : decodeData.userId);
            if (!userWithPermission)
                throw new notFound_errors_1.default("User not found", custom_errors_1.ErrorCode.NOT_FOUND);
            req.userData = {
                userId: decodeData === null || decodeData === void 0 ? void 0 : decodeData.userId,
                permission: (_a = userWithPermission === null || userWithPermission === void 0 ? void 0 : userWithPermission.role) === null || _a === void 0 ? void 0 : _a.permissions,
                role: userWithPermission.role
            };
            next();
        }));
    }
    catch (err) {
        res.render('auth/login', {
            message: 'Please login to continue',
            messageClass: 'alert-danger'
        });
        //throw new UnAuthenticatedError("Provide token", ErrorCode.TOKEN_NOT_FOUND);
    }
};
exports.AuthJWT = AuthJWT;
//# sourceMappingURL=authJWT.middleware.js.map