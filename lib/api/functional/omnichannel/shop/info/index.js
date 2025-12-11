"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProviderShopInfo = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getProviderShopInfo(connection, opts) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getProviderShopInfo.METADATA,
        template: getProviderShopInfo.METADATA.path,
        path: getProviderShopInfo.path(opts),
    });
}
exports.getProviderShopInfo = getProviderShopInfo;
(function (getProviderShopInfo) {
    getProviderShopInfo.METADATA = {
        method: "GET",
        path: "/omnichannel/shop/info",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getProviderShopInfo.path = (opts) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(opts))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/omnichannel/shop/info";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getProviderShopInfo || (exports.getProviderShopInfo = getProviderShopInfo = {}));
//# sourceMappingURL=index.js.map