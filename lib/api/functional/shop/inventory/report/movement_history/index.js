"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovementHistory = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getMovementHistory(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getMovementHistory.METADATA,
        template: getMovementHistory.METADATA.path,
        path: getMovementHistory.path(query),
    });
}
exports.getMovementHistory = getMovementHistory;
(function (getMovementHistory) {
    getMovementHistory.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/movement-history",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getMovementHistory.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/movement-history";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getMovementHistory || (exports.getMovementHistory = getMovementHistory = {}));
//# sourceMappingURL=index.js.map