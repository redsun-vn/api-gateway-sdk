"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelCard = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function cancelCard(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...cancelCard.METADATA,
        template: cancelCard.METADATA.path,
        path: cancelCard.path(id),
    }, input);
}
exports.cancelCard = cancelCard;
(function (cancelCard) {
    cancelCard.METADATA = {
        method: "POST",
        path: "/shop/treatment-cards/:id/cancel",
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
    cancelCard.path = (id) => `/shop/treatment-cards/${encodeURIComponent(id?.toString() ?? "null")}/cancel`;
})(cancelCard || (exports.cancelCard = cancelCard = {}));
//# sourceMappingURL=index.js.map