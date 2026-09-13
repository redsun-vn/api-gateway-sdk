"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revertLeadSuggestion = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function revertLeadSuggestion(connection, leadId, suggestionId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...revertLeadSuggestion.METADATA,
        template: revertLeadSuggestion.METADATA.path,
        path: revertLeadSuggestion.path(leadId, suggestionId),
    });
}
exports.revertLeadSuggestion = revertLeadSuggestion;
(function (revertLeadSuggestion) {
    revertLeadSuggestion.METADATA = {
        method: "POST",
        path: "/shop/crm/leads/:leadId/ai-suggestions/:suggestionId/revert",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    revertLeadSuggestion.path = (leadId, suggestionId) => `/shop/crm/leads/${encodeURIComponent(leadId?.toString() ?? "null")}/ai-suggestions/${encodeURIComponent(suggestionId?.toString() ?? "null")}/revert`;
})(revertLeadSuggestion || (exports.revertLeadSuggestion = revertLeadSuggestion = {}));
//# sourceMappingURL=index.js.map