"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductPrice = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getProductPrice(connection, productId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...getProductPrice.METADATA,
        template: getProductPrice.METADATA.path,
        path: getProductPrice.path(productId),
    }, data);
}
exports.getProductPrice = getProductPrice;
(function (getProductPrice) {
    getProductPrice.METADATA = {
        method: "POST",
        path: "/admin/system-pricebook/:productId/price",
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
    getProductPrice.path = (productId) => `/admin/system-pricebook/${encodeURIComponent(productId?.toString() ?? "null")}/price`;
})(getProductPrice || (exports.getProductPrice = getProductPrice = {}));
//# sourceMappingURL=index.js.map