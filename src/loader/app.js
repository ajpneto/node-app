"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapExpress = void 0;
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("../routes"));
const index_middleware_1 = require("../middleware/index.middleware");
const corsOption_1 = require("../config/corsOption");
const hbs_1 = __importDefault(require("hbs"));
const path_1 = __importDefault(require("path"));
(0, dotenv_1.config)();
hbs_1.default.registerPartials(path_1.default.join('./src/', 'views/partials/'));
//A Handlebars custom helper function
hbs_1.default.registerHelper('copyrightYear', function () {
    var year = new Date().getFullYear();
    return new hbs_1.default.SafeString(year);
});
hbs_1.default.registerHelper('trimString', function (passedString) {
    var theString = passedString.substring(0, 200);
    return new hbs_1.default.SafeString(theString);
});
hbs_1.default.registerHelper('replaceString', function (passedString) {
    var theString = passedString.replace("_", " ");
    return new hbs_1.default.SafeString(theString);
});
hbs_1.default.registerHelper('for', function (from, to, incr, block) {
    var accum = '';
    for (var i = from; i < to; i += incr)
        accum += block.fn(i);
    return accum;
});
const bootstrapExpress = (app) => {
    /*    app.use(helmet());
        app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
        app.use(helmet.xssFilter());
        app.use(helmet.contentSecurityPolicy({
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'trusted-cdn.com'"],
                objectSrc: ["'none'"],
                upgradeInsecureRequests: [],
            },
        }));*/
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use((0, cors_1.default)(corsOption_1.corsOptions));
    app.use((0, cookie_parser_1.default)());
    app.use(body_parser_1.default.urlencoded({ extended: true, limit: "30mb" }));
    app.use(express_1.default.static(path_1.default.join('./src/', 'public')));
    app.set('view engine', 'hbs');
    app.set('views', path_1.default.join('./src/', 'views'));
    app.use("/", routes_1.default);
    app.use(index_middleware_1.notFoundMiddleware);
    app.use(index_middleware_1.errorHandlerMiddleware);
};
exports.bootstrapExpress = bootstrapExpress;
//# sourceMappingURL=app.js.map