"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controller/main/auth.controller");
const router = express_1.default.Router();
router.get('/register', auth_controller_1.register);
router.get('/activate', auth_controller_1.activate);
router.get('/login', auth_controller_1.login);
router.get('/logout', auth_controller_1.logout);
exports.default = router;
//# sourceMappingURL=auth.js.map