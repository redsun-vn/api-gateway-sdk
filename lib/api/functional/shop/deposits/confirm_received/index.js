"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmReceived = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function confirmReceived(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...confirmReceived.METADATA,
        template: confirmReceived.METADATA.path,
        path: confirmReceived.path(id),
    }, body);
}
exports.confirmReceived = confirmReceived;
(function (confirmReceived) {
    confirmReceived.METADATA = {
        method: "POST",
        path: "/shop/deposits/:id/confirm-received",
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
    confirmReceived.path = (id) => `/shop/deposits/${encodeURIComponent(id?.toString() ?? "null")}/confirm-received`;
})(confirmReceived || (exports.confirmReceived = confirmReceived = {}));
//# sourceMappingURL=index.js.map