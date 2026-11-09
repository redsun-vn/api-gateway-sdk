"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptSuggestion = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function acceptSuggestion(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...acceptSuggestion.METADATA,
        template: acceptSuggestion.METADATA.path,
        path: acceptSuggestion.path(id),
    });
}
exports.acceptSuggestion = acceptSuggestion;
(function (acceptSuggestion) {
    acceptSuggestion.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/suggestions/:id/accept",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    acceptSuggestion.path = (id) => `/shop/mkt-os/suggestions/${encodeURIComponent(id?.toString() ?? "null")}/accept`;
})(acceptSuggestion || (exports.acceptSuggestion = acceptSuggestion = {}));
//# sourceMappingURL=index.js.map