"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCart = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function verifyCart(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...verifyCart.METADATA,
        template: verifyCart.METADATA.path,
        path: verifyCart.path(id),
    });
}
exports.verifyCart = verifyCart;
(function (verifyCart) {
    verifyCart.METADATA = {
        method: "POST",
        path: "/carts/:id/verify",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    verifyCart.path = (id) => `/carts/${encodeURIComponent(id?.toString() ?? "null")}/verify`;
})(verifyCart || (exports.verifyCart = verifyCart = {}));
//# sourceMappingURL=index.js.map