"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.receiveGoods = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function receiveGoods(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...receiveGoods.METADATA,
        template: receiveGoods.METADATA.path,
        path: receiveGoods.path(id),
    }, input);
}
exports.receiveGoods = receiveGoods;
(function (receiveGoods) {
    receiveGoods.METADATA = {
        method: "POST",
        path: "/shop/inventory/stock-transfers/:id/receive",
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
    receiveGoods.path = (id) => `/shop/inventory/stock-transfers/${encodeURIComponent(id?.toString() ?? "null")}/receive`;
})(receiveGoods || (exports.receiveGoods = receiveGoods = {}));
//# sourceMappingURL=index.js.map