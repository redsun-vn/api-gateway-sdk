"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectLeadSuggestion = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function rejectLeadSuggestion(connection, leadId, suggestionId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...rejectLeadSuggestion.METADATA,
        template: rejectLeadSuggestion.METADATA.path,
        path: rejectLeadSuggestion.path(leadId, suggestionId),
    }, body);
}
exports.rejectLeadSuggestion = rejectLeadSuggestion;
(function (rejectLeadSuggestion) {
    rejectLeadSuggestion.METADATA = {
        method: "POST",
        path: "/shop/crm/leads/:leadId/ai-suggestions/:suggestionId/reject",
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
    rejectLeadSuggestion.path = (leadId, suggestionId) => `/shop/crm/leads/${encodeURIComponent(leadId?.toString() ?? "null")}/ai-suggestions/${encodeURIComponent(suggestionId?.toString() ?? "null")}/reject`;
})(rejectLeadSuggestion || (exports.rejectLeadSuggestion = rejectLeadSuggestion = {}));
//# sourceMappingURL=index.js.map