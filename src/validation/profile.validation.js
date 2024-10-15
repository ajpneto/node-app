"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProfileSchema = void 0;
const zod_1 = require("zod");
exports.createProfileSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        firstName: (0, zod_1.string)().optional(),
        lastName: (0, zod_1.string)().optional(),
        age: (0, zod_1.number)().min(0, { message: "Age cannot be negative" }).optional(),
        addresses: (0, zod_1.string)().optional(),
        email: (0, zod_1.string)({ required_error: "Email is required" }).email("Invalid email format"),
        phoneNumber: (0, zod_1.string)().regex(/\d{3}-\d{3}-\d{4}/, { message: "Invalid phone number format" }).optional(),
        userId: (0, zod_1.string)({ required_error: "User ID is required" }),
    }),
});
//# sourceMappingURL=profile.validation.js.map