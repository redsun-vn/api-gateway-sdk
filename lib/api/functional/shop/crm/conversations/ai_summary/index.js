"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSummary = exports.requestSummary = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function requestSummary(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...requestSummary.METADATA,
        template: requestSummary.METADATA.path,
        path: requestSummary.path(id),
    });
}
exports.requestSummary = requestSummary;
(function (requestSummary) {
    requestSummary.METADATA = {
        method: "POST",
        path: "/shop/crm/conversations/:id/ai-summary",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    requestSummary.path = (id) => `/shop/crm/conversations/${encodeURIComponent(id?.toString() ?? "null")}/ai-summary`;
})(requestSummary || (exports.requestSummary = requestSummary = {}));
async function getSummary(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getSummary.METADATA,
        template: getSummary.METADATA.path,
        path: getSummary.path(id),
    });
}
exports.getSummary = getSummary;
(function (getSummary) {
    getSummary.METADATA = {
        method: "GET",
        path: "/shop/crm/conversations/:id/ai-summary",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getSummary.path = (id) => `/shop/crm/conversations/${encodeURIComponent(id?.toString() ?? "null")}/ai-summary`;
})(getSummary || (exports.getSummary = getSummary = {}));
//# sourceMappingURL=index.js.map