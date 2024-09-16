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
        path: "/shipping-providers/:shippingCode/wards",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    getWards.path = (shippingCode, districtId) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries({
            districtId,
        }))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shipping-providers/${encodeURIComponent(shippingCode ?? "null")}/wards`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getWards || (exports.getWards = getWards = {}));
//# sourceMappingURL=index.js.map