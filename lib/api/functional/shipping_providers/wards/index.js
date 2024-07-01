"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWards = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getWards(connection, shippingCode, districtId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getWards.METADATA,
        template: getWards.METADATA.path,
        path: getWards.path(shippingCode, districtId),
    });
}
exports.getWards = getWards;
(function (getWards) {
    getWards.METADATA = {
        method: "GET",
        path: "/shipping-providers/:shippingCode/wards/:districtId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    getWards.path = (shippingCode, districtId) => `/shipping-providers/${encodeURIComponent(shippingCode ?? "null")}/wards/${encodeURIComponent(districtId ?? "null")}`;
})(getWards || (exports.getWards = getWards = {}));
//# sourceMappingURL=index.js.map