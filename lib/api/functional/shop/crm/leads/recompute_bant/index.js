"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recomputeBant = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function recomputeBant(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...recomputeBant.METADATA,
        template: recomputeBant.METADATA.path,
        path: recomputeBant.path(id),
    });
}
exports.recomputeBant = recomputeBant;
(function (recomputeBant) {
    recomputeBant.METADATA = {
        method: "POST",
        path: "/shop/crm/leads/:id/recompute-bant",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    recomputeBant.path = (id) => `/shop/crm/leads/${encodeURIComponent(id?.toString() ?? "null")}/recompute-bant`;
})(recomputeBant || (exports.recomputeBant = recomputeBant = {}));
//# sourceMappingURL=index.js.map