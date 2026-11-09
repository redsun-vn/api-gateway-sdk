"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unsubscribe = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function unsubscribe(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...unsubscribe.METADATA,
        template: unsubscribe.METADATA.path,
        path: unsubscribe.path(),
    }, body);
}
exports.unsubscribe = unsubscribe;
(function (unsubscribe) {
    unsubscribe.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/subscriber-bulk-jobs/unsubscribes",
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
    unsubscribe.path = () => "/shop/mkt-os/subscriber-bulk-jobs/unsubscribes";
})(unsubscribe || (exports.unsubscribe = unsubscribe = {}));
//# sourceMappingURL=index.js.map