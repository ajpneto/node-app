"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const profileSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number,
        min: [0, 'Age cannot be negative'],
    },
    addresses: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: function (v) {
                return /\S+@\S+\.\S+/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
    },
    phoneNumber: {
        type: String,
        unique: true,
        validate: {
            validator: function (v) {
                return /\d{2}-\d{5}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required'],
        unique: true,
        index: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Profile', profileSchema);
//# sourceMappingURL=profile.model.js.map