"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractTokenfromHeader = void 0;
exports.generateRandom6DigitString = generateRandom6DigitString;
const extractTokenfromHeader = (req) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!(authHeader === null || authHeader === void 0 ? void 0 : authHeader.startsWith("Bearer "))) {
        return false;
    }
    return authHeader.split(" ")[1];
};
exports.extractTokenfromHeader = extractTokenfromHeader;
function generateRandom6DigitString() {
    const random8DigitNumber = Math.floor(100000 + Math.random() * 900000);
    return String(random8DigitNumber);
}
//# sourceMappingURL=util.js.map