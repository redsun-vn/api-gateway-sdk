"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function apply(connection, order_uuid) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...apply.METADATA,
        template: apply.METADATA.path,
        path: apply.path(order_uuid),
    });
}
exports.apply = apply;
(function (apply) {
    apply.METADATA = {
        method: "GET",
        path: "/shop/loyalty-programs/order/:order_uuid",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    apply.path = (order_uuid) => `/shop/loyalty-programs/order/${encodeURIComponent(order_uuid?.toString() ?? "null")}`;
})(apply || (exports.apply = apply = {}));
//# sourceMappingURL=index.js.map