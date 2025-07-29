"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getStats(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getStats.METADATA,
        template: getStats.METADATA.path,
        path: getStats.path(),
    });
}
exports.getStats = getStats;
(function (getStats) {
    getStats.METADATA = {
        method: "GET",
        path: "/admin/crm/budgets/stats",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getStats.path = () => "/admin/crm/budgets/stats";
})(getStats || (exports.getStats = getStats = {}));
//# sourceMappingURL=index.js.map