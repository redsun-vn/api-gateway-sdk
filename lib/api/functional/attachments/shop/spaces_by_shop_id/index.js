"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneSpaceByShopId = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOneSpaceByShopId(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOneSpaceByShopId.METADATA,
        template: findOneSpaceByShopId.METADATA.path,
        path: findOneSpaceByShopId.path(),
    });
}
exports.findOneSpaceByShopId = findOneSpaceByShopId;
(function (findOneSpaceByShopId) {
    findOneSpaceByShopId.METADATA = {
        method: "GET",
        path: "/attachments/shop/spaces-by-shop-id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOneSpaceByShopId.path = () => "/attachments/shop/spaces-by-shop-id";
})(findOneSpaceByShopId || (exports.findOneSpaceByShopId = findOneSpaceByShopId = {}));
//# sourceMappingURL=index.js.map