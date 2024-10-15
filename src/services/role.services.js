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
exports.getAllRole = getAllRole;
exports.findRoleById = findRoleById;
exports.findRoleByName = findRoleByName;
exports.findRole = findRole;
exports.createRoles = createRoles;
exports.deleteRoleById = deleteRoleById;
exports.updateRoleById = updateRoleById;
const role_model_1 = __importDefault(require("../model/role.model"));
function getAllRole() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield role_model_1.default.find();
    });
}
function findRoleById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield role_model_1.default.findById(id);
    });
}
function findRoleByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield role_model_1.default.findOne({ name: name });
    });
}
function findRole(query_1) {
    return __awaiter(this, arguments, void 0, function* (query, options = { lean: true }) {
        return yield role_model_1.default.findOne(query, {}, options);
    });
}
function createRoles(roleData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield role_model_1.default.create(roleData);
            return { data: result, success: true };
        }
        catch (error) {
            return { data: null, success: false, error };
        }
    });
}
function deleteRoleById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield role_model_1.default.deleteOne({ _id: id });
    });
}
function updateRoleById(id_1, update_1) {
    return __awaiter(this, arguments, void 0, function* (id, update, options = { new: true }) {
        try {
            const result = yield role_model_1.default.findByIdAndUpdate(id, update, options);
            return { data: result, success: true };
        }
        catch (error) {
            return { data: null, success: false, error };
        }
    });
}
//# sourceMappingURL=role.services.js.map