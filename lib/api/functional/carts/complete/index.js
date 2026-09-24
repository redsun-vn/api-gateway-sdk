"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeCart = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function completeCart(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...completeCart.METADATA,
        template: completeCart.METADATA.path,
        path: completeCart.path(id),
    }, input);
}
exports.completeCart = completeCart;
(function (completeCart) {
    completeCart.METADATA = {
        method: "POST",
        path: "/carts/:id/complete",
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
    completeCart.path = (id) => `/carts/${encodeURIComponent(id?.toString() ?? "null")}/complete`;
})(completeCart || (exports.completeCart = completeCart = {}));
//# sourceMappingURL=index.js.map