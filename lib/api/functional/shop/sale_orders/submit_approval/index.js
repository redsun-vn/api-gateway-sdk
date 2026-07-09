"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitApproval = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function submitApproval(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...submitApproval.METADATA,
        template: submitApproval.METADATA.path,
        path: submitApproval.path(id),
    });
}
exports.submitApproval = submitApproval;
(function (submitApproval) {
    submitApproval.METADATA = {
        method: "POST",
        path: "/shop/sale-orders/:id/submit-approval",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    submitApproval.path = (id) => `/shop/sale-orders/${encodeURIComponent(id?.toString() ?? "null")}/submit-approval`;
})(submitApproval || (exports.submitApproval = submitApproval = {}));
//# sourceMappingURL=index.js.map