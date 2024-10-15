"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
        select: false,
    },
    name: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    OTPCode: {
        type: String,
        select: false,
    },
    OTPCodeExpires: {
        type: Number,
        select: false,
    },
    passwordResetCode: {
        type: String,
        select: true,
    },
    role: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Role',
        required: [true, 'Role is required'],
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=user.model.js.map