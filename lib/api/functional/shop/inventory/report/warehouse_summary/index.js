"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWarehouseSummary = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getWarehouseSummary(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getWarehouseSummary.METADATA,
        template: getWarehouseSummary.METADATA.path,
        path: getWarehouseSummary.path(query),
    });
}
exports.getWarehouseSummary = getWarehouseSummary;
(function (getWarehouseSummary) {
    getWarehouseSummary.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/warehouse-summary",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getWarehouseSummary.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/warehouse-summary";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getWarehouseSummary || (exports.getWarehouseSummary = getWarehouseSummary = {}));
//# sourceMappingURL=index.js.map