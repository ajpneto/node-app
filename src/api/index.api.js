"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const role_api_1 = __importDefault(require("./role.api"));
const auth_api_1 = __importDefault(require("./auth.api"));
const router = express_1.default.Router();
router.use("/role", role_api_1.default);
router.use("/auth", auth_api_1.default);
router.get("/", (req, res) => {
    res.json({
        message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
    });
});
exports.default = router;
//# sourceMappingURL=index.api.js.map