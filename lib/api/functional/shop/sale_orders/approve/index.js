"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approveApproval = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function approveApproval(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...approveApproval.METADATA,
        template: approveApproval.METADATA.path,
        path: approveApproval.path(id),
    }, body);
}
exports.approveApproval = approveApproval;
(function (approveApproval) {
    approveApproval.METADATA = {
        method: "POST",
        path: "/shop/sale-orders/:id/approve",
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
    approveApproval.path = (id) => `/shop/sale-orders/${encodeURIComponent(id?.toString() ?? "null")}/approve`;
})(approveApproval || (exports.approveApproval = approveApproval = {}));
//# sourceMappingURL=index.js.map