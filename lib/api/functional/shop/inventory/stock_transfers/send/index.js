"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendGoods = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendGoods(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...sendGoods.METADATA,
        template: sendGoods.METADATA.path,
        path: sendGoods.path(id),
    }, input);
}
exports.sendGoods = sendGoods;
(function (sendGoods) {
    sendGoods.METADATA = {
        method: "POST",
        path: "/shop/inventory/stock-transfers/:id/send",
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
    sendGoods.path = (id) => `/shop/inventory/stock-transfers/${encodeURIComponent(id?.toString() ?? "null")}/send`;
})(sendGoods || (exports.sendGoods = sendGoods = {}));
//# sourceMappingURL=index.js.map