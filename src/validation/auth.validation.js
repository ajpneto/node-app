"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerProfileSchema = exports.updateProfileSchema = exports.changeOldPasswordSchema = exports.changePasswordSchema = exports.ResetPasswordSchema = exports.ForgotPasswordSchema = exports.loginUserSchema = exports.activateUserSchema = exports.registerUserSchema = void 0;
const zod_1 = require("zod");
exports.registerUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({ required_error: "Should have name" }).min(1, { message: 'name should have at least 1 character' }).max(20, { message: 'First name should have at most 20 characters' }),
        email: (0, zod_1.string)({ required_error: "Should have email" }).email({ message: 'Invalid email address' }),
        password: (0, zod_1.string)({ required_error: "Should have password" }).min(6, { message: 'Password should have at least 6 characters' }),
        confirmPassword: (0, zod_1.string)({ required_error: "Should have confirm password" }).min(6, { message: 'confirmPassword should have at least 6 characters' }),
        phoneNumber: (0, zod_1.string)({ required_error: "Should have phone number" }).min(1, { message: 'Phone number should have at least 1 character' }),
    }).refine(data => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    }),
});
exports.activateUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({ required_error: "Should have email" }).email({ message: 'Invalid email address' }).optional(),
        OTPCode: (0, zod_1.string)({ required_error: "Should have verification code" }),
        phoneNumber: (0, zod_1.string)({ required_error: "Should have password" }).optional()
    })
});
exports.loginUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({ required_error: "Should have email" }).email({ message: 'Invalid email address' }).optional(),
        password: (0, zod_1.string)({ required_error: "Should have password" }),
        phoneNumber: (0, zod_1.string)({ required_error: "Should have phoneNumber" }).optional()
    })
});
exports.ForgotPasswordSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({ required_error: "Should have email" }).email({ message: 'Invalid email address' }).optional(),
        phoneNumber: (0, zod_1.string)({ required_error: "Should have password" }).optional()
    })
});
exports.ResetPasswordSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({ required_error: "Should have email" }).email({ message: 'Invalid email address' }).optional(),
        passwordResetCode: (0, zod_1.string)({ required_error: "Should have password reset code" }),
        password: (0, zod_1.string)({ required_error: "Should have password" }),
        phoneNumber: (0, zod_1.string)({ required_error: "Should have password" }).optional()
    })
});
exports.changePasswordSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({ required_error: "Should have email" }).email({ message: 'Invalid email address' }),
        password: (0, zod_1.string)({ required_error: "Should have password" }),
    })
});
exports.changeOldPasswordSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        newPassword: (0, zod_1.string)({ required_error: "Should have new password" }),
        oldPassword: (0, zod_1.string)({ required_error: "Should have old password" }),
    })
});
exports.updateProfileSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        firstName: (0, zod_1.string)().min(1, { message: 'First name should have at least 1 character' }).max(20, { message: 'First name should have at most 20 characters' }).optional(),
        lastName: (0, zod_1.string)().min(1, { message: 'Last name should have at least 1 character' }).max(20, { message: 'Last name should have at most 20 characters' }).optional(),
        phoneNumber: (0, zod_1.string)().min(1, { message: 'Phone number should have at least 1 character' }).optional(),
    })
});
exports.updateCustomerProfileSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        firstName: (0, zod_1.string)().min(1, { message: 'First name should have at least 1 character' }).max(20, { message: 'First name should have at most 20 characters' }).optional(),
        lastName: (0, zod_1.string)().min(1, { message: 'Last name should have at least 1 character' }).max(20, { message: 'Last name should have at most 20 characters' }).optional(),
        phoneNumber: (0, zod_1.string)().min(1, { message: 'Phone number should have at least 1 character' }).optional(),
        birthDate: (0, zod_1.date)().optional(),
        city: (0, zod_1.string)().optional()
    })
});
//# sourceMappingURL=auth.validation.js.map