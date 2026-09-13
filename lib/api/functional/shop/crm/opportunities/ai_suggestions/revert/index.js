"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revertOpportunitySuggestion = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function revertOpportunitySuggestion(connection, opportunityId, suggestionId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...revertOpportunitySuggestion.METADATA,
        template: revertOpportunitySuggestion.METADATA.path,
        path: revertOpportunitySuggestion.path(opportunityId, suggestionId),
    });
}
exports.revertOpportunitySuggestion = revertOpportunitySuggestion;
(function (revertOpportunitySuggestion) {
    revertOpportunitySuggestion.METADATA = {
        method: "POST",
        path: "/shop/crm/opportunities/:opportunityId/ai-suggestions/:suggestionId/revert",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    revertOpportunitySuggestion.path = (opportunityId, suggestionId) => `/shop/crm/opportunities/${encodeURIComponent(opportunityId?.toString() ?? "null")}/ai-suggestions/${encodeURIComponent(suggestionId?.toString() ?? "null")}/revert`;
})(revertOpportunitySuggestion || (exports.revertOpportunitySuggestion = revertOpportunitySuggestion = {}));
//# sourceMappingURL=index.js.map