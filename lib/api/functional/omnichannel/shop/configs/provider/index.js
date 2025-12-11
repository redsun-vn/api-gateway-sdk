"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProviderShops = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getProviderShops(connection, provider) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getProviderShops.METADATA,
        template: getProviderShops.METADATA.path,
        path: getProviderShops.path(provider),
    });
}
exports.getProviderShops = getProviderShops;
(function (getProviderShops) {
    getProviderShops.METADATA = {
        method: "GET",
        path: "/omnichannel/shop/configs/provider/:provider",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getProviderShops.path = (provider) => `/omnichannel/shop/configs/provider/${encodeURIComponent(provider?.toString() ?? "null")}`;
})(getProviderShops || (exports.getProviderShops = getProviderShops = {}));
//# sourceMappingURL=index.js.map