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
exports.getAllProfiles = getAllProfiles;
exports.findProfileById = findProfileById;
exports.findProfile = findProfile;
exports.createProfile = createProfile;
exports.deleteProfileById = deleteProfileById;
exports.updateProfileById = updateProfileById;
const profile_model_1 = __importDefault(require("../model/profile.model"));
function getAllProfiles() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield profile_model_1.default.find().populate({
            path: 'userId',
            select: "-password -OTPCode -OTPCodeExpires -passwordResetCode -business",
        })
            .exec();
    });
}
function findProfileById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield profile_model_1.default.findById(id).populate({
            path: 'userId',
            select: "-password -OTPCode -OTPCodeExpires -passwordResetCode -business",
        })
            .exec();
    });
}
function findProfile(query_1) {
    return __awaiter(this, arguments, void 0, function* (query, options = { lean: true }) {
        return yield profile_model_1.default.findOne(query, {}, options);
    });
}
function createProfile(profileData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield profile_model_1.default.create(profileData);
            return { data: result, success: true };
        }
        catch (error) {
            return { data: null, success: false, error };
        }
    });
}
function deleteProfileById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield profile_model_1.default.deleteOne({ _id: id });
    });
}
function updateProfileById(id_1, update_1) {
    return __awaiter(this, arguments, void 0, function* (id, update, options = { new: true }) {
        try {
            const result = yield profile_model_1.default.findByIdAndUpdate(id, update, options);
            return { data: result, success: true };
        }
        catch (error) {
            return { data: null, success: false, error };
        }
    });
}
//# sourceMappingURL=profile.services.js.map