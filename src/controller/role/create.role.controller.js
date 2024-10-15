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
exports.createRole = void 0;
const role_model_1 = __importDefault(require("../../model/role.model"));
const internalServer_errors_1 = __importDefault(require("../../errors/internalServer.errors"));
const custom_errors_1 = require("../../errors/custom.errors");
const role_services_1 = require("../../services/role.services");
// Create a new role
const createRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, permissions, grantAll } = req.body;
        // Check if the role already exists
        const existingRole = yield (0, role_services_1.findRoleByName)(name);
        if (existingRole) {
            return res.status(400).json({ message: "Role already exists", success: false });
        }
        // Create the role
        const newRole = new role_model_1.default({ name, permissions, grantAll });
        yield newRole.save();
        res.status(201).json({ message: "Role created successfully", success: true });
    }
    catch (error) {
        throw new internalServer_errors_1.default("Failed to create role", custom_errors_1.ErrorCode.INTERNAL_SERVER);
    }
});
exports.createRole = createRole;
//# sourceMappingURL=create.role.controller.js.map