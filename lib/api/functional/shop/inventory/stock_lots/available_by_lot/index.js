"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.availableByLot = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function availableByLot(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...availableByLot.METADATA,
        template: availableByLot.METADATA.path,
        path: availableByLot.path(query),
    });
}
exports.availableByLot = availableByLot;
(function (availableByLot) {
    availableByLot.METADATA = {
        method: "GET",
        path: "/shop/inventory/stock-lots/available-by-lot",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    availableByLot.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/stock-lots/available-by-lot";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(availableByLot || (exports.availableByLot = availableByLot = {}));
//# sourceMappingURL=index.js.map