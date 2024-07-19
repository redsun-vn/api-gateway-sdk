"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItem = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updateItem(connection, id, itemId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateItem.METADATA,
        template: updateItem.METADATA.path,
        path: updateItem.path(id, itemId),
    }, data);
}
exports.updateItem = updateItem;
(function (updateItem) {
    updateItem.METADATA = {
        method: "PUT",
        path: "/shop/fulfillment-orders/:id/item/:itemId",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    updateItem.path = (id, itemId) => `/shop/fulfillment-orders/${encodeURIComponent(id ?? "null")}/item/${encodeURIComponent(itemId ?? "null")}`;
})(updateItem || (exports.updateItem = updateItem = {}));
//# sourceMappingURL=index.js.map