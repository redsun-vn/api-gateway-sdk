"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAccounts = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updateAccounts(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateAccounts.METADATA,
        template: updateAccounts.METADATA.path,
        path: updateAccounts.path(id),
    }, body);
}
exports.updateAccounts = updateAccounts;
(function (updateAccounts) {
    updateAccounts.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/ads/connections/:id/accounts",
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
    updateAccounts.path = (id) => `/shop/mkt-os/ads/connections/${encodeURIComponent(id?.toString() ?? "null")}/accounts`;
})(updateAccounts || (exports.updateAccounts = updateAccounts = {}));
//# sourceMappingURL=index.js.map