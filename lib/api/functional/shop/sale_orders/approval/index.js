"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApproval = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getApproval(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getApproval.METADATA,
        template: getApproval.METADATA.path,
        path: getApproval.path(id),
    });
}
exports.getApproval = getApproval;
(function (getApproval) {
    getApproval.METADATA = {
        method: "GET",
        path: "/shop/sale-orders/:id/approval",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getApproval.path = (id) => `/shop/sale-orders/${encodeURIComponent(id?.toString() ?? "null")}/approval`;
})(getApproval || (exports.getApproval = getApproval = {}));
//# sourceMappingURL=index.js.map