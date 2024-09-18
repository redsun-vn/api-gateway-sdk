"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllWithDeleted = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllWithDeleted(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllWithDeleted.METADATA,
        template: findAllWithDeleted.METADATA.path,
        path: findAllWithDeleted.path(),
    });
}
exports.findAllWithDeleted = findAllWithDeleted;
(function (findAllWithDeleted) {
    findAllWithDeleted.METADATA = {
        method: "GET",
        path: "/admin/shops/deleted",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findAllWithDeleted.path = () => "/admin/shops/deleted";
})(findAllWithDeleted || (exports.findAllWithDeleted = findAllWithDeleted = {}));
//# sourceMappingURL=index.js.map