"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeFromShopeeShop = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function authorizeFromShopeeShop(connection, opts) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...authorizeFromShopeeShop.METADATA,
        template: authorizeFromShopeeShop.METADATA.path,
        path: authorizeFromShopeeShop.path(opts),
    });
}
exports.authorizeFromShopeeShop = authorizeFromShopeeShop;
(function (authorizeFromShopeeShop) {
    authorizeFromShopeeShop.METADATA = {
        method: "GET",
        path: "/omnichannel/shopee-shop/callback",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    authorizeFromShopeeShop.path = (opts) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(opts))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/omnichannel/shopee-shop/callback";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(authorizeFromShopeeShop || (exports.authorizeFromShopeeShop = authorizeFromShopeeShop = {}));
//# sourceMappingURL=index.js.map