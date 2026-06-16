"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuotePrefill = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getQuotePrefill(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getQuotePrefill.METADATA,
        template: getQuotePrefill.METADATA.path,
        path: getQuotePrefill.path(id),
    });
}
exports.getQuotePrefill = getQuotePrefill;
(function (getQuotePrefill) {
    getQuotePrefill.METADATA = {
        method: "GET",
        path: "/shop/crm/opportunities/:id/quote-prefill",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getQuotePrefill.path = (id) => `/shop/crm/opportunities/${encodeURIComponent(id?.toString() ?? "null")}/quote-prefill`;
})(getQuotePrefill || (exports.getQuotePrefill = getQuotePrefill = {}));
//# sourceMappingURL=index.js.map