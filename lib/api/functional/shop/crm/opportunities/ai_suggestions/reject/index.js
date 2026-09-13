"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectOpportunitySuggestion = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function rejectOpportunitySuggestion(connection, opportunityId, suggestionId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...rejectOpportunitySuggestion.METADATA,
        template: rejectOpportunitySuggestion.METADATA.path,
        path: rejectOpportunitySuggestion.path(opportunityId, suggestionId),
    }, body);
}
exports.rejectOpportunitySuggestion = rejectOpportunitySuggestion;
(function (rejectOpportunitySuggestion) {
    rejectOpportunitySuggestion.METADATA = {
        method: "POST",
        path: "/shop/crm/opportunities/:opportunityId/ai-suggestions/:suggestionId/reject",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    rejectOpportunitySuggestion.path = (opportunityId, suggestionId) => `/shop/crm/opportunities/${encodeURIComponent(opportunityId?.toString() ?? "null")}/ai-suggestions/${encodeURIComponent(suggestionId?.toString() ?? "null")}/reject`;
})(rejectOpportunitySuggestion || (exports.rejectOpportunitySuggestion = rejectOpportunitySuggestion = {}));
//# sourceMappingURL=index.js.map