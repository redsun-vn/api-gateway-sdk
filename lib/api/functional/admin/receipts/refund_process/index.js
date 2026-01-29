"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processRefund = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function processRefund(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...processRefund.METADATA,
        template: processRefund.METADATA.path,
        path: processRefund.path(id),
    }, data);
}
exports.processRefund = processRefund;
(function (processRefund) {
    processRefund.METADATA = {
        method: "PUT",
        path: "/admin/receipts/:id/refund-process",
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
    processRefund.path = (id) => `/admin/receipts/${encodeURIComponent(id?.toString() ?? "null")}/refund-process`;
})(processRefund || (exports.processRefund = processRefund = {}));
//# sourceMappingURL=index.js.map