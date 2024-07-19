"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistricts = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getDistricts(connection, shippingCode, provinceId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getDistricts.METADATA,
        template: getDistricts.METADATA.path,
        path: getDistricts.path(shippingCode, provinceId),
    });
}
exports.getDistricts = getDistricts;
(function (getDistricts) {
    getDistricts.METADATA = {
        method: "GET",
        path: "/shipping-providers/:shippingCode/districts/:provinceId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    getDistricts.path = (shippingCode, provinceId) => `/shipping-providers/${encodeURIComponent(shippingCode ?? "null")}/districts/${encodeURIComponent(provinceId ?? "null")}`;
})(getDistricts || (exports.getDistricts = getDistricts = {}));
//# sourceMappingURL=index.js.map