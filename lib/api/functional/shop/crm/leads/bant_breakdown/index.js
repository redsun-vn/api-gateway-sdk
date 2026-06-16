"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bantBreakdown = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function bantBreakdown(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...bantBreakdown.METADATA,
        template: bantBreakdown.METADATA.path,
        path: bantBreakdown.path(id),
    });
}
exports.bantBreakdown = bantBreakdown;
(function (bantBreakdown) {
    bantBreakdown.METADATA = {
        method: "GET",
        path: "/shop/crm/leads/:id/bant-breakdown",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    bantBreakdown.path = (id) => `/shop/crm/leads/${encodeURIComponent(id?.toString() ?? "null")}/bant-breakdown`;
})(bantBreakdown || (exports.bantBreakdown = bantBreakdown = {}));
//# sourceMappingURL=index.js.map