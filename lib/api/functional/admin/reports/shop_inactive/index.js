"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShopInActive = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getShopInActive(connection, subtractNum) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getShopInActive.METADATA,
        template: getShopInActive.METADATA.path,
        path: getShopInActive.path(subtractNum),
    });
}
exports.getShopInActive = getShopInActive;
(function (getShopInActive) {
    getShopInActive.METADATA = {
        method: "GET",
        path: "/admin/reports/shop-inactive/:subtractNum",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getShopInActive.path = (subtractNum) => `/admin/reports/shop-inactive/${encodeURIComponent(subtractNum?.toString() ?? "null")}`;
})(getShopInActive || (exports.getShopInActive = getShopInActive = {}));
//# sourceMappingURL=index.js.map