"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyToOrder = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function applyToOrder(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...applyToOrder.METADATA,
        template: applyToOrder.METADATA.path,
        path: applyToOrder.path(),
    }, body);
}
exports.applyToOrder = applyToOrder;
(function (applyToOrder) {
    applyToOrder.METADATA = {
        method: "POST",
        path: "/shop/deposits/apply-to-order",
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
    applyToOrder.path = () => "/shop/deposits/apply-to-order";
})(applyToOrder || (exports.applyToOrder = applyToOrder = {}));
//# sourceMappingURL=index.js.map