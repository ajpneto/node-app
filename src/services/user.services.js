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
exports.findExtendedUsers = void 0;
exports.findAllUsers = findAllUsers;
exports.findUserById = findUserById;
exports.findUserByEmail = findUserByEmail;
exports.findUserByPhone = findUserByPhone;
exports.findUser = findUser;
exports.createUser = createUser;
exports.updateUserById = updateUserById;
exports.deleteUserById = deleteUserById;
const user_model_1 = __importDefault(require("../model/user.model"));
function findAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield user_model_1.default.find();
    });
}
function findUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield user_model_1.default.findById(id);
    });
}
const findExtendedUsers = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findById(userId)
        .populate('role')
        .exec();
});
exports.findExtendedUsers = findExtendedUsers;
function findUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield user_model_1.default.findOne({ email: email });
    });
}
function findUserByPhone(phoneNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield user_model_1.default.findOne({ phoneNumber: phoneNumber });
    });
}
function findUser(query_1) {
    return __awaiter(this, arguments, void 0, function* (query, options = { lean: true }) {
        return yield user_model_1.default.findOne(query, {}, options);
    });
}
function createUser(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield user_model_1.default.create(userData);
            console.log("result", result);
            return { data: result, success: true };
        }
        catch (error) {
            return { data: null, success: false, error };
        }
    });
}
function updateUserById(id_1, update_1) {
    return __awaiter(this, arguments, void 0, function* (id, update, options = { new: true }) {
        try {
            const result = yield user_model_1.default.findByIdAndUpdate(id, update, options);
            return { data: result, success: true };
        }
        catch (error) {
            return { data: null, success: false, error };
        }
    });
}
function deleteUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield user_model_1.default.deleteOne({ _id: id });
    });
}
//# sourceMappingURL=user.services.js.map