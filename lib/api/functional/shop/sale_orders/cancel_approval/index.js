"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelApproval = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function cancelApproval(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...cancelApproval.METADATA,
        template: cancelApproval.METADATA.path,
        path: cancelApproval.path(id),
    });
}
exports.cancelApproval = cancelApproval;
(function (cancelApproval) {
    cancelApproval.METADATA = {
        method: "POST",
        path: "/shop/sale-orders/:id/cancel-approval",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    cancelApproval.path = (id) => `/shop/sale-orders/${encodeURIComponent(id?.toString() ?? "null")}/cancel-approval`;
})(cancelApproval || (exports.cancelApproval = cancelApproval = {}));
//# sourceMappingURL=index.js.map