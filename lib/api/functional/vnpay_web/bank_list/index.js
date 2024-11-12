"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBankList = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getBankList(connection, shopId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getBankList.METADATA,
        template: getBankList.METADATA.path,
        path: getBankList.path(shopId),
    });
}
exports.getBankList = getBankList;
(function (getBankList) {
    getBankList.METADATA = {
        method: "GET",
        path: "/vnpay-web/bank-list/:shopId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getBankList.path = (shopId) => `/vnpay-web/bank-list/${encodeURIComponent(shopId?.toString() ?? "null")}`;
})(getBankList || (exports.getBankList = getBankList = {}));
//# sourceMappingURL=index.js.map