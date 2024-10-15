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
exports.getRoleById = exports.getAllRoles = void 0;
const notFound_errors_1 = __importDefault(require("../../errors/notFound.errors"));
const internalServer_errors_1 = __importDefault(require("../../errors/internalServer.errors"));
const custom_errors_1 = require("../../errors/custom.errors");
const role_services_1 = require("../../services/role.services");
// Get all roles
const getAllRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield (0, role_services_1.getAllRole)();
        res.status(200).json({ roles, success: true });
    }
    catch (error) {
        throw new internalServer_errors_1.default("Failed to fetch roles", custom_errors_1.ErrorCode.INTERNAL_SERVER);
    }
});
exports.getAllRoles = getAllRoles;
// Get role by ID
const getRoleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const role = yield (0, role_services_1.findRoleById)(id);
        if (!role) {
            throw new notFound_errors_1.default('Role not found', custom_errors_1.ErrorCode.NOT_FOUND);
        }
        res.status(200).json({ role, success: true });
    }
    catch (error) {
        throw new internalServer_errors_1.default(`Failed to fetch role with ID: ${id}`, custom_errors_1.ErrorCode.INTERNAL_SERVER);
    }
});
exports.getRoleById = getRoleById;
//# sourceMappingURL=get.role.controller.js.map