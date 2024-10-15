"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (e) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const message = e.errors.map((err) => err.message);
        return res.status(400).json({ message: message.join(','), sucess: false });
    }
};
exports.default = validateSchema;
//# sourceMappingURL=validationSchema.js.map