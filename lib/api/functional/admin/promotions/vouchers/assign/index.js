"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignPromotionVoucherToCustomer = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function assignPromotionVoucherToCustomer(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...assignPromotionVoucherToCustomer.METADATA,
        template: assignPromotionVoucherToCustomer.METADATA.path,
        path: assignPromotionVoucherToCustomer.path(id),
    }, body);
}
exports.assignPromotionVoucherToCustomer = assignPromotionVoucherToCustomer;
(function (assignPromotionVoucherToCustomer) {
    assignPromotionVoucherToCustomer.METADATA = {
        method: "POST",
        path: "/admin/promotions/vouchers/:id/assign",
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
    assignPromotionVoucherToCustomer.path = (id) => `/admin/promotions/vouchers/${encodeURIComponent(id?.toString() ?? "null")}/assign`;
})(assignPromotionVoucherToCustomer || (exports.assignPromotionVoucherToCustomer = assignPromotionVoucherToCustomer = {}));
//# sourceMappingURL=index.js.map