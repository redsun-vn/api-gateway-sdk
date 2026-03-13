"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLogs = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findLogs(connection, id, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findLogs.METADATA,
        template: findLogs.METADATA.path,
        path: findLogs.path(id, query),
    });
}
exports.findLogs = findLogs;
(function (findLogs) {
    findLogs.METADATA = {
        method: "GET",
        path: "/shop/loyalty-campaigns-logs/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findLogs.path = (id, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/loyalty-campaigns-logs/${encodeURIComponent(id?.toString() ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findLogs || (exports.findLogs = findLogs = {}));
//# sourceMappingURL=index.js.map