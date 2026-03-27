"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleTiktokShopCallback = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function handleTiktokShopCallback(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...handleTiktokShopCallback.METADATA,
        template: handleTiktokShopCallback.METADATA.path,
        path: handleTiktokShopCallback.path(query),
    });
}
exports.handleTiktokShopCallback = handleTiktokShopCallback;
(function (handleTiktokShopCallback) {
    handleTiktokShopCallback.METADATA = {
        method: "GET",
        path: "/shop/omnichannel/tiktok-shop/callback",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    handleTiktokShopCallback.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/omnichannel/tiktok-shop/callback";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(handleTiktokShopCallback || (exports.handleTiktokShopCallback = handleTiktokShopCallback = {}));
//# sourceMappingURL=index.js.map