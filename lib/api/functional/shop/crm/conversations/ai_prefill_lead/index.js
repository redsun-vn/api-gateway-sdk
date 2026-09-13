"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrefill = exports.requestPrefill = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function requestPrefill(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...requestPrefill.METADATA,
        template: requestPrefill.METADATA.path,
        path: requestPrefill.path(id),
    });
}
exports.requestPrefill = requestPrefill;
(function (requestPrefill) {
    requestPrefill.METADATA = {
        method: "POST",
        path: "/shop/crm/conversations/:id/ai-prefill-lead",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    requestPrefill.path = (id) => `/shop/crm/conversations/${encodeURIComponent(id?.toString() ?? "null")}/ai-prefill-lead`;
})(requestPrefill || (exports.requestPrefill = requestPrefill = {}));
async function getPrefill(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPrefill.METADATA,
        template: getPrefill.METADATA.path,
        path: getPrefill.path(id),
    });
}
exports.getPrefill = getPrefill;
(function (getPrefill) {
    getPrefill.METADATA = {
        method: "GET",
        path: "/shop/crm/conversations/:id/ai-prefill-lead",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPrefill.path = (id) => `/shop/crm/conversations/${encodeURIComponent(id?.toString() ?? "null")}/ai-prefill-lead`;
})(getPrefill || (exports.getPrefill = getPrefill = {}));
//# sourceMappingURL=index.js.map