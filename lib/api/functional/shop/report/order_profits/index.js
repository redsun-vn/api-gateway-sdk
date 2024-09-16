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
exports.findCompleted = exports.$export = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.$export = __importStar(require("./$export"));
async function findCompleted(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findCompleted.METADATA,
        template: findCompleted.METADATA.path,
        path: findCompleted.path(query),
    });
}
exports.findCompleted = findCompleted;
(function (findCompleted) {
    findCompleted.METADATA = {
        method: "GET",
        path: "/shop/report/order-profits",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findCompleted.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/order-profits";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findCompleted || (exports.findCompleted = findCompleted = {}));
//# sourceMappingURL=index.js.map