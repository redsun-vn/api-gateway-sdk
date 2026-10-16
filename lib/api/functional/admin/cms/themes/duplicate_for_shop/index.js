"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateForShop = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function duplicateForShop(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...duplicateForShop.METADATA,
        template: duplicateForShop.METADATA.path,
        path: duplicateForShop.path(),
    }, data);
}
exports.duplicateForShop = duplicateForShop;
(function (duplicateForShop) {
    duplicateForShop.METADATA = {
        method: "POST",
        path: "/admin/cms/themes/duplicate-for-shop",
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
    duplicateForShop.path = () => "/admin/cms/themes/duplicate-for-shop";
})(duplicateForShop || (exports.duplicateForShop = duplicateForShop = {}));
//# sourceMappingURL=index.js.map