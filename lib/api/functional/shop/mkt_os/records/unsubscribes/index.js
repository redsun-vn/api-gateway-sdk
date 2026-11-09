"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordUnsubscribe = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function recordUnsubscribe(connection, type, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...recordUnsubscribe.METADATA,
        template: recordUnsubscribe.METADATA.path,
        path: recordUnsubscribe.path(type, id),
    }, body);
}
exports.recordUnsubscribe = recordUnsubscribe;
(function (recordUnsubscribe) {
    recordUnsubscribe.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/records/:type/:id/unsubscribes",
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
    recordUnsubscribe.path = (type, id) => `/shop/mkt-os/records/${encodeURIComponent(type?.toString() ?? "null")}/${encodeURIComponent(id?.toString() ?? "null")}/unsubscribes`;
})(recordUnsubscribe || (exports.recordUnsubscribe = recordUnsubscribe = {}));
//# sourceMappingURL=index.js.map