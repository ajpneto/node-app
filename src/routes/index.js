"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_1 = __importDefault(require("./main"));
const material_1 = __importDefault(require("./material"));
const auth_1 = __importDefault(require("./auth"));
const router = express_1.default.Router();
router.use("/", main_1.default);
router.use("/material", material_1.default);
router.use("/auth", auth_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map