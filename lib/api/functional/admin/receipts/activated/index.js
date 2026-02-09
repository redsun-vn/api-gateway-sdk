"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateReceipt = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function activateReceipt(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...activateReceipt.METADATA,
        template: activateReceipt.METADATA.path,
        path: activateReceipt.path(id),
    }, data);
}
exports.activateReceipt = activateReceipt;
(function (activateReceipt) {
    activateReceipt.METADATA = {
        method: "PUT",
        path: "/admin/receipts/:id/activated",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    activateReceipt.path = (id) => `/admin/receipts/${encodeURIComponent(id?.toString() ?? "null")}/activated`;
})(activateReceipt || (exports.activateReceipt = activateReceipt = {}));
//# sourceMappingURL=index.js.map