"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOversell = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getOversell(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getOversell.METADATA,
        template: getOversell.METADATA.path,
        path: getOversell.path(query),
    });
}
exports.getOversell = getOversell;
(function (getOversell) {
    getOversell.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/reports/oversell",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getOversell.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/reports/oversell";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getOversell || (exports.getOversell = getOversell = {}));
//# sourceMappingURL=index.js.map