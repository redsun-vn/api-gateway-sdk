"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInventoryTurnover = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getInventoryTurnover(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getInventoryTurnover.METADATA,
        template: getInventoryTurnover.METADATA.path,
        path: getInventoryTurnover.path(query),
    });
}
exports.getInventoryTurnover = getInventoryTurnover;
(function (getInventoryTurnover) {
    getInventoryTurnover.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/turnover",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getInventoryTurnover.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/turnover";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getInventoryTurnover || (exports.getInventoryTurnover = getInventoryTurnover = {}));
//# sourceMappingURL=index.js.map