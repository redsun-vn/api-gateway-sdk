"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStockDetail = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getStockDetail(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getStockDetail.METADATA,
        template: getStockDetail.METADATA.path,
        path: getStockDetail.path(query),
    });
}
exports.getStockDetail = getStockDetail;
(function (getStockDetail) {
    getStockDetail.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/stock-detail",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getStockDetail.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/stock-detail";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getStockDetail || (exports.getStockDetail = getStockDetail = {}));
//# sourceMappingURL=index.js.map