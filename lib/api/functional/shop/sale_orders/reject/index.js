"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectApproval = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function rejectApproval(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...rejectApproval.METADATA,
        template: rejectApproval.METADATA.path,
        path: rejectApproval.path(id),
    }, body);
}
exports.rejectApproval = rejectApproval;
(function (rejectApproval) {
    rejectApproval.METADATA = {
        method: "POST",
        path: "/shop/sale-orders/:id/reject",
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
    rejectApproval.path = (id) => `/shop/sale-orders/${encodeURIComponent(id?.toString() ?? "null")}/reject`;
})(rejectApproval || (exports.rejectApproval = rejectApproval = {}));
//# sourceMappingURL=index.js.map