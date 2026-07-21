"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryLogs = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function queryLogs(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...queryLogs.METADATA,
        template: queryLogs.METADATA.path,
        path: queryLogs.path(query),
    });
}
exports.queryLogs = queryLogs;
(function (queryLogs) {
    queryLogs.METADATA = {
        method: "GET",
        path: "/admin/cskh-email/logs",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    queryLogs.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/cskh-email/logs";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(queryLogs || (exports.queryLogs = queryLogs = {}));
//# sourceMappingURL=index.js.map