"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAuditLogs = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function searchAuditLogs(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...searchAuditLogs.METADATA,
        template: searchAuditLogs.METADATA.path,
        path: searchAuditLogs.path(query),
    });
}
exports.searchAuditLogs = searchAuditLogs;
(function (searchAuditLogs) {
    searchAuditLogs.METADATA = {
        method: "GET",
        path: "/shop/clinic/search/audit-logs",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    searchAuditLogs.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/clinic/search/audit-logs";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(searchAuditLogs || (exports.searchAuditLogs = searchAuditLogs = {}));
//# sourceMappingURL=index.js.map