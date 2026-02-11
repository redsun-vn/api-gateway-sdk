"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListProductPrice = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getListProductPrice(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...getListProductPrice.METADATA,
        template: getListProductPrice.METADATA.path,
        path: getListProductPrice.path(),
    }, data);
}
exports.getListProductPrice = getListProductPrice;
(function (getListProductPrice) {
    getListProductPrice.METADATA = {
        method: "POST",
        path: "/shop/system-pricebook/list-product-price",
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
    getListProductPrice.path = () => "/shop/system-pricebook/list-product-price";
})(getListProductPrice || (exports.getListProductPrice = getListProductPrice = {}));
//# sourceMappingURL=index.js.map