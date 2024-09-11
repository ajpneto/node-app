"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const allowedOrigins = [
    "http://localhost:3000/",
    "http://localhost:3001/",
    "http://localhost:3002/",
    "http://localhost:3003/",
];
exports.corsOptions = {
    origin: (origin, callback) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true,
    optionsSuccessStatus: 200,
};
//# sourceMappingURL=corsOption.js.map