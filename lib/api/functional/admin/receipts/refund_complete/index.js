"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeRefund = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function completeRefund(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...completeRefund.METADATA,
        template: completeRefund.METADATA.path,
        path: completeRefund.path(id),
    }, data);
}
exports.completeRefund = completeRefund;
(function (completeRefund) {
    completeRefund.METADATA = {
        method: "PUT",
        path: "/admin/receipts/:id/refund-complete",
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
    completeRefund.path = (id) => `/admin/receipts/${encodeURIComponent(id?.toString() ?? "null")}/refund-complete`;
})(completeRefund || (exports.completeRefund = completeRefund = {}));
//# sourceMappingURL=index.js.map