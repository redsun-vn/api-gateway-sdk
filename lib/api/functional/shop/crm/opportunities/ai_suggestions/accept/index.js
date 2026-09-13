"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptOpportunitySuggestion = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function acceptOpportunitySuggestion(connection, opportunityId, suggestionId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...acceptOpportunitySuggestion.METADATA,
        template: acceptOpportunitySuggestion.METADATA.path,
        path: acceptOpportunitySuggestion.path(opportunityId, suggestionId),
    }, body);
}
exports.acceptOpportunitySuggestion = acceptOpportunitySuggestion;
(function (acceptOpportunitySuggestion) {
    acceptOpportunitySuggestion.METADATA = {
        method: "POST",
        path: "/shop/crm/opportunities/:opportunityId/ai-suggestions/:suggestionId/accept",
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
    acceptOpportunitySuggestion.path = (opportunityId, suggestionId) => `/shop/crm/opportunities/${encodeURIComponent(opportunityId?.toString() ?? "null")}/ai-suggestions/${encodeURIComponent(suggestionId?.toString() ?? "null")}/accept`;
})(acceptOpportunitySuggestion || (exports.acceptOpportunitySuggestion = acceptOpportunitySuggestion = {}));
//# sourceMappingURL=index.js.map