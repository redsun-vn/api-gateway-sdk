"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApplicablePrice = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getApplicablePrice(connection, productId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...getApplicablePrice.METADATA,
        template: getApplicablePrice.METADATA.path,
        path: getApplicablePrice.path(productId),
    }, data);
}
exports.getApplicablePrice = getApplicablePrice;
(function (getApplicablePrice) {
    getApplicablePrice.METADATA = {
        method: "POST",
        path: "/shop/system-pricebook/:productId/applicable-price",
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
    getApplicablePrice.path = (productId) => `/shop/system-pricebook/${encodeURIComponent(productId?.toString() ?? "null")}/applicable-price`;
})(getApplicablePrice || (exports.getApplicablePrice = getApplicablePrice = {}));
//# sourceMappingURL=index.js.map