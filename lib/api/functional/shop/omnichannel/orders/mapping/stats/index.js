"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statistics = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function statistics(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...statistics.METADATA,
        template: statistics.METADATA.path,
        path: statistics.path(),
    });
}
exports.statistics = statistics;
(function (statistics) {
    statistics.METADATA = {
        method: "GET",
        path: "/shop/omnichannel/orders/mapping/stats",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    statistics.path = () => "/shop/omnichannel/orders/mapping/stats";
})(statistics || (exports.statistics = statistics = {}));
//# sourceMappingURL=index.js.map