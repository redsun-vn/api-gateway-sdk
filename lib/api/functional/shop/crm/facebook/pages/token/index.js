"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePageToken = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updatePageToken(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updatePageToken.METADATA,
        template: updatePageToken.METADATA.path,
        path: updatePageToken.path(id),
    }, body);
}
exports.updatePageToken = updatePageToken;
(function (updatePageToken) {
    updatePageToken.METADATA = {
        method: "PATCH",
        path: "/shop/crm/facebook/pages/:id/token",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    updatePageToken.path = (id) => `/shop/crm/facebook/pages/${encodeURIComponent(id?.toString() ?? "null")}/token`;
})(updatePageToken || (exports.updatePageToken = updatePageToken = {}));
//# sourceMappingURL=index.js.map