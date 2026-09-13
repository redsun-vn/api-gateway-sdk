"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opportunitySummary = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function opportunitySummary(connection, opportunityId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...opportunitySummary.METADATA,
        template: opportunitySummary.METADATA.path,
        path: opportunitySummary.path(opportunityId),
    });
}
exports.opportunitySummary = opportunitySummary;
(function (opportunitySummary) {
    opportunitySummary.METADATA = {
        method: "GET",
        path: "/shop/crm/opportunities/:opportunityId/ai-summary",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    opportunitySummary.path = (opportunityId) => `/shop/crm/opportunities/${encodeURIComponent(opportunityId?.toString() ?? "null")}/ai-summary`;
})(opportunitySummary || (exports.opportunitySummary = opportunitySummary = {}));
//# sourceMappingURL=index.js.map