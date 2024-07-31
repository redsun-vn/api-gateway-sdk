"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistricts = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getDistricts(connection, shippingCode, provinceId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getDistricts.METADATA,
        path: getDistricts.path(shippingCode, provinceId),
    });
}
exports.getDistricts = getDistricts;
(function (getDistricts) {
    getDistricts.METADATA = {
        method: "GET",
        path: "/shipping-providers/:shippingCode/districts",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
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
        const location = `/shipping-providers/${encodeURIComponent(shippingCode ?? "null")}/districts`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getDistricts || (exports.getDistricts = getDistricts = {}));
//# sourceMappingURL=index.js.map