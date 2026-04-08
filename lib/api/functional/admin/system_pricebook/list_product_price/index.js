"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListProductPriceByAdmin = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getListProductPriceByAdmin(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...getListProductPriceByAdmin.METADATA,
        template: getListProductPriceByAdmin.METADATA.path,
        path: getListProductPriceByAdmin.path(),
    }, data);
}
exports.getListProductPriceByAdmin = getListProductPriceByAdmin;
(function (getListProductPriceByAdmin) {
    getListProductPriceByAdmin.METADATA = {
        method: "POST",
        path: "/admin/system-pricebook/list-product-price",
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
    getListProductPriceByAdmin.path = () => "/admin/system-pricebook/list-product-price";
})(getListProductPriceByAdmin || (exports.getListProductPriceByAdmin = getListProductPriceByAdmin = {}));
//# sourceMappingURL=index.js.map