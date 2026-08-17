"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareDailySnapshot = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function compareDailySnapshot(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...compareDailySnapshot.METADATA,
        template: compareDailySnapshot.METADATA.path,
        path: compareDailySnapshot.path(query),
    });
}
exports.compareDailySnapshot = compareDailySnapshot;
(function (compareDailySnapshot) {
    compareDailySnapshot.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/daily-snapshot/compare",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    compareDailySnapshot.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/daily-snapshot/compare";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(compareDailySnapshot || (exports.compareDailySnapshot = compareDailySnapshot = {}));
//# sourceMappingURL=index.js.map