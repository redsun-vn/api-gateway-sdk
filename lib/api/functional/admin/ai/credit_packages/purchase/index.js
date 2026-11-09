"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminPurchase = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function adminPurchase(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...adminPurchase.METADATA,
        template: adminPurchase.METADATA.path,
        path: adminPurchase.path(id),
    }, data);
}
exports.adminPurchase = adminPurchase;
(function (adminPurchase) {
    adminPurchase.METADATA = {
        method: "POST",
        path: "/admin/ai/credit-packages/:id/purchase",
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
    adminPurchase.path = (id) => `/admin/ai/credit-packages/${encodeURIComponent(id?.toString() ?? "null")}/purchase`;
})(adminPurchase || (exports.adminPurchase = adminPurchase = {}));
//# sourceMappingURL=index.js.map