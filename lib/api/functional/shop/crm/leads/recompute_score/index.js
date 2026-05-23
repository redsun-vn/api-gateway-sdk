"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recomputeScore = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function recomputeScore(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...recomputeScore.METADATA,
        template: recomputeScore.METADATA.path,
        path: recomputeScore.path(id),
    });
}
exports.recomputeScore = recomputeScore;
(function (recomputeScore) {
    recomputeScore.METADATA = {
        method: "POST",
        path: "/shop/crm/leads/:id/recompute-score",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    recomputeScore.path = (id) => `/shop/crm/leads/${encodeURIComponent(id?.toString() ?? "null")}/recompute-score`;
})(recomputeScore || (exports.recomputeScore = recomputeScore = {}));
//# sourceMappingURL=index.js.map