"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectRefund = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function rejectRefund(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...rejectRefund.METADATA,
        template: rejectRefund.METADATA.path,
        path: rejectRefund.path(id),
    }, data);
}
exports.rejectRefund = rejectRefund;
(function (rejectRefund) {
    rejectRefund.METADATA = {
        method: "PUT",
        path: "/admin/receipts/:id/refund-reject",
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
    rejectRefund.path = (id) => `/admin/receipts/${encodeURIComponent(id?.toString() ?? "null")}/refund-reject`;
})(rejectRefund || (exports.rejectRefund = rejectRefund = {}));
//# sourceMappingURL=index.js.map