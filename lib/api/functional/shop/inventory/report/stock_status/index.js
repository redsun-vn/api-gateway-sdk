"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStockStatus = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getStockStatus(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getStockStatus.METADATA,
        template: getStockStatus.METADATA.path,
        path: getStockStatus.path(query),
    });
}
exports.getStockStatus = getStockStatus;
(function (getStockStatus) {
    getStockStatus.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/stock-status",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getStockStatus.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/stock-status";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getStockStatus || (exports.getStockStatus = getStockStatus = {}));
//# sourceMappingURL=index.js.map