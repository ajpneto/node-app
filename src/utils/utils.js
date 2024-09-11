"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCategory = exports.toArray = void 0;
const toArray = (data) => {
    const items = [];
    for (const [key, value] of Object.entries(data)) {
        value.forEach((item) => { });
        items.push({ category: key, value });
    }
    ;
    return items;
};
exports.toArray = toArray;
const toCategory = (data, category) => {
    const result = data.items.reduce((accum, curr) => {
        (accum[curr[category]] = accum[curr[category]] || []).push(curr);
        return accum;
    }, {});
    return result;
};
exports.toCategory = toCategory;
//# sourceMappingURL=utils.js.map