"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.estimate = exports.generate = exports.brand_voice = exports.blog = exports.batch_generate = exports.history = exports.search = exports.keyword_suggest = exports.jobs = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.jobs = __importStar(require("./jobs"));
exports.keyword_suggest = __importStar(require("./keyword_suggest"));
exports.search = __importStar(require("./search"));
exports.history = __importStar(require("./history"));
exports.batch_generate = __importStar(require("./batch_generate"));
exports.blog = __importStar(require("./blog"));
exports.brand_voice = __importStar(require("./brand_voice"));
async function generate(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...generate.METADATA,
        template: generate.METADATA.path,
        path: generate.path(),
    }, data);
}
exports.generate = generate;
(function (generate) {
    generate.METADATA = {
        method: "POST",
        path: "/shop/ai/content/generate",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    generate.path = () => "/shop/ai/content/generate";
})(generate || (exports.generate = generate = {}));
async function estimate(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...estimate.METADATA,
        template: estimate.METADATA.path,
        path: estimate.path(),
    }, data);
}
exports.estimate = estimate;
(function (estimate) {
    estimate.METADATA = {
        method: "POST",
        path: "/shop/ai/content/estimate",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    estimate.path = () => "/shop/ai/content/estimate";
})(estimate || (exports.estimate = estimate = {}));
//# sourceMappingURL=index.js.map