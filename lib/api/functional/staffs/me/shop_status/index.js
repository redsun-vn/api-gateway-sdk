"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyShopStatus = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getMyShopStatus(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getMyShopStatus.METADATA,
        template: getMyShopStatus.METADATA.path,
        path: getMyShopStatus.path(),
    });
}
exports.getMyShopStatus = getMyShopStatus;
(function (getMyShopStatus) {
    getMyShopStatus.METADATA = {
        method: "GET",
        path: "/staffs/me/shop-status",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getMyShopStatus.path = () => "/staffs/me/shop-status";
})(getMyShopStatus || (exports.getMyShopStatus = getMyShopStatus = {}));
//# sourceMappingURL=index.js.map