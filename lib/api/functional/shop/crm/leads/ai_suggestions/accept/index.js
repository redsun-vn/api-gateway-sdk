"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptLeadSuggestion = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function acceptLeadSuggestion(connection, leadId, suggestionId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...acceptLeadSuggestion.METADATA,
        template: acceptLeadSuggestion.METADATA.path,
        path: acceptLeadSuggestion.path(leadId, suggestionId),
    }, body);
}
exports.acceptLeadSuggestion = acceptLeadSuggestion;
(function (acceptLeadSuggestion) {
    acceptLeadSuggestion.METADATA = {
        method: "POST",
        path: "/shop/crm/leads/:leadId/ai-suggestions/:suggestionId/accept",
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
    acceptLeadSuggestion.path = (leadId, suggestionId) => `/shop/crm/leads/${encodeURIComponent(leadId?.toString() ?? "null")}/ai-suggestions/${encodeURIComponent(suggestionId?.toString() ?? "null")}/accept`;
})(acceptLeadSuggestion || (exports.acceptLeadSuggestion = acceptLeadSuggestion = {}));
//# sourceMappingURL=index.js.map