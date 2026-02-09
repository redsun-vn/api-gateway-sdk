"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRefundStats = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getRefundStats(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getRefundStats.METADATA,
        template: getRefundStats.METADATA.path,
        path: getRefundStats.path(query),
    });
}
exports.getRefundStats = getRefundStats;
(function (getRefundStats) {
    getRefundStats.METADATA = {
        method: "GET",
        path: "/admin/receipts-refund-stats",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getRefundStats.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/receipts-refund-stats";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getRefundStats || (exports.getRefundStats = getRefundStats = {}));
//# sourceMappingURL=index.js.map