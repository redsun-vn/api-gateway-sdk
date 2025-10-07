"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFromBoShop = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createFromBoShop(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createFromBoShop.METADATA,
        template: createFromBoShop.METADATA.path,
        path: createFromBoShop.path(),
    }, data);
}
exports.createFromBoShop = createFromBoShop;
(function (createFromBoShop) {
    createFromBoShop.METADATA = {
        method: "POST",
        path: "/shop/bo/wallets",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    createFromBoShop.path = () => "/shop/bo/wallets";
})(createFromBoShop || (exports.createFromBoShop = createFromBoShop = {}));
//# sourceMappingURL=index.js.map