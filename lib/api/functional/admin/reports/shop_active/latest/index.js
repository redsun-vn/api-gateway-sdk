"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShopLastedActive = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getShopLastedActive(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getShopLastedActive.METADATA,
        template: getShopLastedActive.METADATA.path,
        path: getShopLastedActive.path(query),
    });
}
exports.getShopLastedActive = getShopLastedActive;
(function (getShopLastedActive) {
    getShopLastedActive.METADATA = {
        method: "GET",
        path: "/admin/reports/shop-active/latest",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getShopLastedActive.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/reports/shop-active/latest";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getShopLastedActive || (exports.getShopLastedActive = getShopLastedActive = {}));
//# sourceMappingURL=index.js.map