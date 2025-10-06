"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmOrder = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function confirmOrder(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...confirmOrder.METADATA,
        template: confirmOrder.METADATA.path,
        path: confirmOrder.path(),
    }, data);
}
exports.confirmOrder = confirmOrder;
(function (confirmOrder) {
    confirmOrder.METADATA = {
        method: "POST",
        path: "/shop/wallet/order-confirm",
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
    confirmOrder.path = () => "/shop/wallet/order-confirm";
})(confirmOrder || (exports.confirmOrder = confirmOrder = {}));
//# sourceMappingURL=index.js.map