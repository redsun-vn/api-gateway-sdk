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
exports.historyDetail = exports.history = exports.lead = exports.link = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.link = __importStar(require("./link"));
exports.lead = __importStar(require("./lead"));
async function history(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...history.METADATA,
        template: history.METADATA.path,
        path: history.path(query),
    });
}
exports.history = history;
(function (history) {
    history.METADATA = {
        method: "GET",
        path: "/shop/crm/calls/history",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    history.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/calls/history";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(history || (exports.history = history = {}));
async function historyDetail(connection, stringeeCallId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...historyDetail.METADATA,
        template: historyDetail.METADATA.path,
        path: historyDetail.path(stringeeCallId),
    });
}
exports.historyDetail = historyDetail;
(function (historyDetail) {
    historyDetail.METADATA = {
        method: "GET",
        path: "/shop/crm/calls/history/:stringee_call_id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    historyDetail.path = (stringeeCallId) => `/shop/crm/calls/history/${encodeURIComponent(stringeeCallId?.toString() ?? "null")}`;
})(historyDetail || (exports.historyDetail = historyDetail = {}));
//# sourceMappingURL=index.js.map