"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvinces = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getProvinces(connection, shippingCode) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getProvinces.METADATA,
        template: getProvinces.METADATA.path,
        path: getProvinces.path(shippingCode),
    });
}
exports.getProvinces = getProvinces;
(function (getProvinces) {
    getProvinces.METADATA = {
        method: "GET",
        path: "/public/shipping-providers/:shippingCode/provinces",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getProvinces.path = (shippingCode) => `/public/shipping-providers/${encodeURIComponent(shippingCode?.toString() ?? "null")}/provinces`;
})(getProvinces || (exports.getProvinces = getProvinces = {}));
//# sourceMappingURL=index.js.map