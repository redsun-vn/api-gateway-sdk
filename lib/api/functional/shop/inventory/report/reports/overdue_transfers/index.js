"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOverdueTransfers = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getOverdueTransfers(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getOverdueTransfers.METADATA,
        template: getOverdueTransfers.METADATA.path,
        path: getOverdueTransfers.path(query),
    });
}
exports.getOverdueTransfers = getOverdueTransfers;
(function (getOverdueTransfers) {
    getOverdueTransfers.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/reports/overdue-transfers",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getOverdueTransfers.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/reports/overdue-transfers";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getOverdueTransfers || (exports.getOverdueTransfers = getOverdueTransfers = {}));
//# sourceMappingURL=index.js.map