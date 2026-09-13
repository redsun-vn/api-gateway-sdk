"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSuspensionLogs = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findSuspensionLogs(connection, id, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findSuspensionLogs.METADATA,
        template: findSuspensionLogs.METADATA.path,
        path: findSuspensionLogs.path(id, query),
    });
}
exports.findSuspensionLogs = findSuspensionLogs;
(function (findSuspensionLogs) {
    findSuspensionLogs.METADATA = {
        method: "GET",
        path: "/admin/cms/websites/:id/suspension-logs",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findSuspensionLogs.path = (id, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/admin/cms/websites/${encodeURIComponent(id?.toString() ?? "null")}/suspension-logs`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findSuspensionLogs || (exports.findSuspensionLogs = findSuspensionLogs = {}));
//# sourceMappingURL=index.js.map