"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approveRefund = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function approveRefund(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...approveRefund.METADATA,
        template: approveRefund.METADATA.path,
        path: approveRefund.path(id),
    }, data);
}
exports.approveRefund = approveRefund;
(function (approveRefund) {
    approveRefund.METADATA = {
        method: "PUT",
        path: "/admin/receipts/:id/refund-approve",
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
    approveRefund.path = (id) => `/admin/receipts/${encodeURIComponent(id?.toString() ?? "null")}/refund-approve`;
})(approveRefund || (exports.approveRefund = approveRefund = {}));
//# sourceMappingURL=index.js.map