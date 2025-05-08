"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneByShop = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOneByShop(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOneByShop.METADATA,
        template: findOneByShop.METADATA.path,
        path: findOneByShop.path(),
    });
}
exports.findOneByShop = findOneByShop;
(function (findOneByShop) {
    findOneByShop.METADATA = {
        method: "GET",
        path: "/shop/hr/salary/leave-policies/by-shop",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOneByShop.path = () => "/shop/hr/salary/leave-policies/by-shop";
})(findOneByShop || (exports.findOneByShop = findOneByShop = {}));
//# sourceMappingURL=index.js.map