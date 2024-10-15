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
exports.getAllTokens = getAllTokens;
exports.findTokenById = findTokenById;
exports.findToken = findToken;
exports.createToken = createToken;
exports.deleteTokenById = deleteTokenById;
exports.updateTokenById = updateTokenById;
const token_model_1 = __importDefault(require("../model/token.model"));
function getAllTokens() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield token_model_1.default.find();
    });
}
function findTokenById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield token_model_1.default.findById(id);
    });
}
function findToken(query_1) {
    return __awaiter(this, arguments, void 0, function* (query, options = { lean: true }) {
        return yield token_model_1.default.findOne(query, {}, options);
    });
}
function createToken(tokenData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield token_model_1.default.create(tokenData);
            return { data: result, success: true };
        }
        catch (error) {
            return { data: null, success: false, error };
        }
    });
}
function deleteTokenById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield token_model_1.default.deleteOne({ _id: id });
    });
}
function updateTokenById(id_1, update_1) {
    return __awaiter(this, arguments, void 0, function* (id, update, options = { new: true }) {
        try {
            const result = yield token_model_1.default.findByIdAndUpdate(id, update, options);
            return { data: result, success: true };
        }
        catch (error) {
            return { data: null, success: false, error };
        }
    });
}
//# sourceMappingURL=token.services.js.map