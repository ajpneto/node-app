"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_role_controller_1 = require("../controller/role/index.role.controller");
const router = express_1.default.Router();
// Create a new role
router.post('/', index_role_controller_1.createRole);
// Get all roles
router.get('/', index_role_controller_1.getAllRoles);
// Get role by ID
router.get('/:id', index_role_controller_1.getRoleById);
exports.default = router;
//# sourceMappingURL=role.api.js.map