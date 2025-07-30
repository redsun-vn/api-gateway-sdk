"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeadBANTScore = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getLeadBANTScore(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getLeadBANTScore.METADATA,
        template: getLeadBANTScore.METADATA.path,
        path: getLeadBANTScore.path(id),
    });
}
exports.getLeadBANTScore = getLeadBANTScore;
(function (getLeadBANTScore) {
    getLeadBANTScore.METADATA = {
        method: "GET",
        path: "/admin/crm/leads-analytics/bant-score/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getLeadBANTScore.path = (id) => `/admin/crm/leads-analytics/bant-score/${encodeURIComponent(id?.toString() ?? "null")}`;
})(getLeadBANTScore || (exports.getLeadBANTScore = getLeadBANTScore = {}));
//# sourceMappingURL=index.js.map