"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeFromTiktokShop = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function authorizeFromTiktokShop(connection, opts) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...authorizeFromTiktokShop.METADATA,
        template: authorizeFromTiktokShop.METADATA.path,
        path: authorizeFromTiktokShop.path(opts),
    });
}
exports.authorizeFromTiktokShop = authorizeFromTiktokShop;
(function (authorizeFromTiktokShop) {
    authorizeFromTiktokShop.METADATA = {
        method: "GET",
        path: "/omnichannel/tiktok-shop/callback",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    authorizeFromTiktokShop.path = (opts) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(opts))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/omnichannel/tiktok-shop/callback";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(authorizeFromTiktokShop || (exports.authorizeFromTiktokShop = authorizeFromTiktokShop = {}));
//# sourceMappingURL=index.js.map