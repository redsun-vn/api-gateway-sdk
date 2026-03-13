"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findStats = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findStats(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findStats.METADATA,
        template: findStats.METADATA.path,
        path: findStats.path(),
    });
}
exports.findStats = findStats;
(function (findStats) {
    findStats.METADATA = {
        method: "GET",
        path: "/shop/loyalty-campaigns-stats",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findStats.path = () => "/shop/loyalty-campaigns-stats";
})(findStats || (exports.findStats = findStats = {}));
//# sourceMappingURL=index.js.map