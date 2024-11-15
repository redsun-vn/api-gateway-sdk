"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShopLastedActive = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getShopLastedActive(connection, shopId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getShopLastedActive.METADATA,
        template: getShopLastedActive.METADATA.path,
        path: getShopLastedActive.path(shopId),
    });
}
exports.getShopLastedActive = getShopLastedActive;
(function (getShopLastedActive) {
    getShopLastedActive.METADATA = {
        method: "GET",
        path: "/admin/reports/shop-inactive/:shop_id/latest",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getShopLastedActive.path = (shopId) => `/admin/reports/shop-inactive/${encodeURIComponent(shopId?.toString() ?? "null")}/latest`;
})(getShopLastedActive || (exports.getShopLastedActive = getShopLastedActive = {}));
//# sourceMappingURL=index.js.map