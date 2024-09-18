"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyDraftOrder = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function applyDraftOrder(connection, order_uuid) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...applyDraftOrder.METADATA,
        template: applyDraftOrder.METADATA.path,
        path: applyDraftOrder.path(order_uuid),
    });
}
exports.applyDraftOrder = applyDraftOrder;
(function (applyDraftOrder) {
    applyDraftOrder.METADATA = {
        method: "GET",
        path: "/shop/loyalty-programs/draft-order/:order_uuid",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    applyDraftOrder.path = (order_uuid) => `/shop/loyalty-programs/draft-order/${encodeURIComponent(order_uuid?.toString() ?? "null")}`;
})(applyDraftOrder || (exports.applyDraftOrder = applyDraftOrder = {}));
//# sourceMappingURL=index.js.map