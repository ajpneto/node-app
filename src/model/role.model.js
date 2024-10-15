"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const roleSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true, index: true }, // e.g., Cashier, Admin
    permissions: [{ type: String, required: true }], // List of permissions, e.g., ['VIEW_ORDERS', 'MANAGE_INVENTORY']
    grantAll: { type: Boolean, default: false },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Role', roleSchema);
//# sourceMappingURL=role.model.js.map