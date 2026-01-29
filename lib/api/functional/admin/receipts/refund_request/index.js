"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestRefund = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function requestRefund(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...requestRefund.METADATA,
        template: requestRefund.METADATA.path,
        path: requestRefund.path(id),
    }, data);
}
exports.requestRefund = requestRefund;
(function (requestRefund) {
    requestRefund.METADATA = {
        method: "PUT",
        path: "/admin/receipts/:id/refund-request",
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
    requestRefund.path = (id) => `/admin/receipts/${encodeURIComponent(id?.toString() ?? "null")}/refund-request`;
})(requestRefund || (exports.requestRefund = requestRefund = {}));
//# sourceMappingURL=index.js.map