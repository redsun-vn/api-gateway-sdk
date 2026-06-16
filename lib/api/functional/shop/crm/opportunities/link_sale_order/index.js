"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkSaleOrder = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function linkSaleOrder(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...linkSaleOrder.METADATA,
        template: linkSaleOrder.METADATA.path,
        path: linkSaleOrder.path(id),
    }, body);
}
exports.linkSaleOrder = linkSaleOrder;
(function (linkSaleOrder) {
    linkSaleOrder.METADATA = {
        method: "POST",
        path: "/shop/crm/opportunities/:id/link-sale-order",
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
    linkSaleOrder.path = (id) => `/shop/crm/opportunities/${encodeURIComponent(id?.toString() ?? "null")}/link-sale-order`;
})(linkSaleOrder || (exports.linkSaleOrder = linkSaleOrder = {}));
//# sourceMappingURL=index.js.map