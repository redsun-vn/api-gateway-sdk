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
        path: "/public/shipping-providers/:shippingCode/districts",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getDistricts.path = (shippingCode, provinceId) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries({
            provinceId,
        }))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/public/shipping-providers/${encodeURIComponent(shippingCode?.toString() ?? "null")}/districts`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getDistricts || (exports.getDistricts = getDistricts = {}));
//# sourceMappingURL=index.js.map