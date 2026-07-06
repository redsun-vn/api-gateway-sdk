"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSyncLog = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listSyncLog(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listSyncLog.METADATA,
        template: listSyncLog.METADATA.path,
        path: listSyncLog.path(query),
    });
}
exports.listSyncLog = listSyncLog;
(function (listSyncLog) {
    listSyncLog.METADATA = {
        method: "GET",
        path: "/shop/crm/lead-webhook/sync-log",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listSyncLog.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/lead-webhook/sync-log";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(listSyncLog || (exports.listSyncLog = listSyncLog = {}));
//# sourceMappingURL=index.js.map