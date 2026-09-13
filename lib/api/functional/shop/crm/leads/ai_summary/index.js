"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadSummary = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function leadSummary(connection, leadId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...leadSummary.METADATA,
        template: leadSummary.METADATA.path,
        path: leadSummary.path(leadId),
    });
}
exports.leadSummary = leadSummary;
(function (leadSummary) {
    leadSummary.METADATA = {
        method: "GET",
        path: "/shop/crm/leads/:leadId/ai-summary",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    leadSummary.path = (leadId) => `/shop/crm/leads/${encodeURIComponent(leadId?.toString() ?? "null")}/ai-summary`;
})(leadSummary || (exports.leadSummary = leadSummary = {}));
//# sourceMappingURL=index.js.map