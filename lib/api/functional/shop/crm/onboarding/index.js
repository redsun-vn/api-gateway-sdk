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
exports.apply = exports.suggest = exports.templates = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.templates = __importStar(require("./templates"));
async function suggest(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...suggest.METADATA,
        template: suggest.METADATA.path,
        path: suggest.path(),
    });
}
exports.suggest = suggest;
(function (suggest) {
    suggest.METADATA = {
        method: "GET",
        path: "/shop/crm/onboarding/suggest",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    suggest.path = () => "/shop/crm/onboarding/suggest";
})(suggest || (exports.suggest = suggest = {}));
async function apply(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...apply.METADATA,
        template: apply.METADATA.path,
        path: apply.path(),
    }, body);
}
exports.apply = apply;
(function (apply) {
    apply.METADATA = {
        method: "POST",
        path: "/shop/crm/onboarding/apply",
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
    apply.path = () => "/shop/crm/onboarding/apply";
})(apply || (exports.apply = apply = {}));
//# sourceMappingURL=index.js.map