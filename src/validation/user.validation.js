"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({ required_error: "Email is required" }).email("Invalid email format"),
        password: (0, zod_1.string)({ required_error: "Password is required" }).min(6, "Password must be at least 6 characters"),
        name: (0, zod_1.string)({ required_error: "Name is required" }),
        phoneNumber: (0, zod_1.string)().regex(/\d{2}-\d{5}-\d{4}/, "Invalid phone number format").optional(),
        role: (0, zod_1.string)({ required_error: "Role is required" }),
        branchIds: (0, zod_1.array)((0, zod_1.string)()).optional(),
    }),
});
//# sourceMappingURL=user.validation.js.map