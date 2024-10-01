"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArray = toArray;
exports.toCategory = toCategory;
exports.paginate = paginate;
const axios_1 = __importDefault(require("axios"));
const env_config_1 = require("../config/env.config");
;
function toArray(data) {
    const items = [];
    for (const [key, value] of Object.entries(data)) {
        value.forEach((item) => { });
        items.push({ category: key, items: value });
    }
    ;
    return items;
}
;
function toCategory(items, category) {
    const result = items.reduce((accum, curr) => {
        (accum[curr[category]] = accum[curr[category]] || []).push(curr);
        return accum;
    }, {});
    return result;
}
;
function paginate(model) {
    return (req, res, next) => {
        const { page } = req.query;
        const { limit } = req.query;
        const startIndex = (+page - 1) * +limit;
        const endIndex = +page * +limit;
        const result = {};
        if (endIndex < model.length) {
            result.next = {
                page: +page + 1,
                limit: +limit,
            };
        }
        if (startIndex > 0) {
            result.previous = {
                page: +page - 1,
                limit: +limit,
            };
        }
        result.items = model.slice(startIndex, endIndex);
        res["paginatedResult"] = result;
        next();
    };
}
const fetchData = (address) => __awaiter(void 0, void 0, void 0, function* () {
    const url = address;
    const X_API_Key = (0, env_config_1.validateEnv)().X_API_Key;
    const options = {
        headers: {
            'X-API-Key': X_API_Key,
            'User-Agent': 'AENTECH'
        }
    };
    try {
        const response = yield axios_1.default.get(url, options);
        return response.data;
    }
    catch (error) {
        console.log("This error occured" + error);
    }
});
exports.default = fetchData;
//# sourceMappingURL=utils.js.map