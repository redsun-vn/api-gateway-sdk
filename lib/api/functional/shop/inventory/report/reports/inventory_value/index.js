"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInventoryValue = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getInventoryValue(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getInventoryValue.METADATA,
        template: getInventoryValue.METADATA.path,
        path: getInventoryValue.path(query),
    });
}
exports.getInventoryValue = getInventoryValue;
(function (getInventoryValue) {
    getInventoryValue.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/reports/inventory-value",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getInventoryValue.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/reports/inventory-value";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getInventoryValue || (exports.getInventoryValue = getInventoryValue = {}));
//# sourceMappingURL=index.js.map