"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivatePromotionVoucher = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function deactivatePromotionVoucher(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deactivatePromotionVoucher.METADATA,
        template: deactivatePromotionVoucher.METADATA.path,
        path: deactivatePromotionVoucher.path(id),
    });
}
exports.deactivatePromotionVoucher = deactivatePromotionVoucher;
(function (deactivatePromotionVoucher) {
    deactivatePromotionVoucher.METADATA = {
        method: "PUT",
        path: "/admin/promotions/vouchers/:id/deactivate",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deactivatePromotionVoucher.path = (id) => `/admin/promotions/vouchers/${encodeURIComponent(id?.toString() ?? "null")}/deactivate`;
})(deactivatePromotionVoucher || (exports.deactivatePromotionVoucher = deactivatePromotionVoucher = {}));
//# sourceMappingURL=index.js.map