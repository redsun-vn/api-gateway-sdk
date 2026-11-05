"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unsubscribe = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function unsubscribe(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...unsubscribe.METADATA,
        template: unsubscribe.METADATA.path,
        path: unsubscribe.path(id),
    }, body);
}
exports.unsubscribe = unsubscribe;
(function (unsubscribe) {
    unsubscribe.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/subscribers/:id/unsubscribes",
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
    unsubscribe.path = (id) => `/shop/mkt-os/subscribers/${encodeURIComponent(id?.toString() ?? "null")}/unsubscribes`;
})(unsubscribe || (exports.unsubscribe = unsubscribe = {}));
//# sourceMappingURL=index.js.map