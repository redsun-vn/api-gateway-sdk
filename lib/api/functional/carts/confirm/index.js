"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmCart = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function confirmCart(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...confirmCart.METADATA,
        template: confirmCart.METADATA.path,
        path: confirmCart.path(id),
    }, input);
}
exports.confirmCart = confirmCart;
(function (confirmCart) {
    confirmCart.METADATA = {
        method: "POST",
        path: "/carts/:id/confirm",
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
    confirmCart.path = (id) => `/carts/${encodeURIComponent(id?.toString() ?? "null")}/confirm`;
})(confirmCart || (exports.confirmCart = confirmCart = {}));
//# sourceMappingURL=index.js.map