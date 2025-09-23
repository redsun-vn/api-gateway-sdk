"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFromPOSShop = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createFromPOSShop(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createFromPOSShop.METADATA,
        template: createFromPOSShop.METADATA.path,
        path: createFromPOSShop.path(),
    }, data);
}
exports.createFromPOSShop = createFromPOSShop;
(function (createFromPOSShop) {
    createFromPOSShop.METADATA = {
        method: "POST",
        path: "/shop/pos/wallets",
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
    createFromPOSShop.path = () => "/shop/pos/wallets";
})(createFromPOSShop || (exports.createFromPOSShop = createFromPOSShop = {}));
//# sourceMappingURL=index.js.map