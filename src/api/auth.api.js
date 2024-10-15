"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validationSchema_1 = __importDefault(require("../middleware/validationSchema"));
const auth_validation_1 = require("../validation/auth.validation");
const index_auth_controller_1 = require("../controller/auth/index.auth.controller");
const authJWT_middleware_1 = require("../middleware/authJWT.middleware");
const router = express_1.default.Router();
router.post("/register", (0, validationSchema_1.default)(auth_validation_1.registerUserSchema), index_auth_controller_1.registerUser);
router.post("/activate", (0, validationSchema_1.default)(auth_validation_1.activateUserSchema), index_auth_controller_1.activateUser);
router.post("/forgotPassword", (0, validationSchema_1.default)(auth_validation_1.ForgotPasswordSchema), index_auth_controller_1.forgotPassword);
router.post("/resetPassword", (0, validationSchema_1.default)(auth_validation_1.ResetPasswordSchema), index_auth_controller_1.resetPasswordHandler);
router.post("/login", (0, validationSchema_1.default)(auth_validation_1.loginUserSchema), index_auth_controller_1.login);
router.post("/changePassword", authJWT_middleware_1.AuthJWT, (0, validationSchema_1.default)(auth_validation_1.changeOldPasswordSchema), index_auth_controller_1.changePassword);
exports.default = router;
//# sourceMappingURL=auth.api.js.map