"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stats = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function stats(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...stats.METADATA,
        template: stats.METADATA.path,
        path: stats.path(),
    });
}
exports.stats = stats;
(function (stats) {
    stats.METADATA = {
        method: "GET",
        path: "/admin/shops/shop_stats",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    stats.path = () => "/admin/shops/shop_stats";
})(stats || (exports.stats = stats = {}));
//# sourceMappingURL=index.js.map