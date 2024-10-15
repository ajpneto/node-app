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
exports.logout = void 0;
const token_model_1 = __importDefault(require("../../model/token.model"));
//@desc logout
//@method GET /customer-auth/logout
//@access public
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const Jwt = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.access_token;
    if (!Jwt)
        return res.status(204).json({ message: "No JWT cookie found", success: true });
    // Clear the JWT cookie
    res.cookie("Jwt", "");
    // Clear the token from the token model
    yield token_model_1.default.deleteOne({ token: Jwt });
    return res.json({ message: "Logged out successfully", success: true });
});
exports.logout = logout;
//# sourceMappingURL=logout.controller.js.map