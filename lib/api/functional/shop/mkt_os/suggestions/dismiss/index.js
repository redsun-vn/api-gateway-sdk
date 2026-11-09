"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dismissSuggestion = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function dismissSuggestion(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...dismissSuggestion.METADATA,
        template: dismissSuggestion.METADATA.path,
        path: dismissSuggestion.path(id),
    }, body);
}
exports.dismissSuggestion = dismissSuggestion;
(function (dismissSuggestion) {
    dismissSuggestion.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/suggestions/:id/dismiss",
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
    dismissSuggestion.path = (id) => `/shop/mkt-os/suggestions/${encodeURIComponent(id?.toString() ?? "null")}/dismiss`;
})(dismissSuggestion || (exports.dismissSuggestion = dismissSuggestion = {}));
//# sourceMappingURL=index.js.map