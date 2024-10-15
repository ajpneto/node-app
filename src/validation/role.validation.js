"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoleSchema = void 0;
const zod_1 = require("zod");
exports.createRoleSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({ required_error: "Name is required" }),
        permissions: (0, zod_1.array)((0, zod_1.string)({ required_error: "At least one permission is required" })),
        grantAll: (0, zod_1.boolean)().optional(),
    }),
});
//# sourceMappingURL=role.validation.js.map