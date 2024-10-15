"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.changePassword = exports.resetPasswordHandler = exports.forgotPassword = exports.login = exports.activateUser = exports.registerUser = void 0;
const register_auth_controller_1 = require("./register.auth.controller");
Object.defineProperty(exports, "registerUser", { enumerable: true, get: function () { return register_auth_controller_1.registerUser; } });
const activateEmail_controller_1 = require("./activateEmail.controller");
Object.defineProperty(exports, "activateUser", { enumerable: true, get: function () { return activateEmail_controller_1.activateUser; } });
const login_controller_1 = require("./login.controller");
Object.defineProperty(exports, "login", { enumerable: true, get: function () { return login_controller_1.login; } });
const forgot_auth_controller_1 = require("./forgot.auth.controller");
Object.defineProperty(exports, "forgotPassword", { enumerable: true, get: function () { return forgot_auth_controller_1.forgotPassword; } });
const reset_auth_controller_1 = require("./reset.auth.controller");
Object.defineProperty(exports, "resetPasswordHandler", { enumerable: true, get: function () { return reset_auth_controller_1.resetPasswordHandler; } });
const change_auth_controller_1 = require("./change.auth.controller");
Object.defineProperty(exports, "changePassword", { enumerable: true, get: function () { return change_auth_controller_1.changePassword; } });
const logout_controller_1 = require("./logout.controller");
Object.defineProperty(exports, "logout", { enumerable: true, get: function () { return logout_controller_1.logout; } });
//# sourceMappingURL=index.auth.controller.js.map