"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createTable(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...(connection.headers ?? {}),
            "Content-Type": "application/json",
        },
    }, {
        ...createTable.METADATA,
        path: createTable.path(),
    }, data);
}
exports.createTable = createTable;
(function (createTable) {
    createTable.METADATA = {
        method: "POST",
        path: "/sync-activity-logs/create-table",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    createTable.path = () => {
        return `/sync-activity-logs/create-table`;
    };
})(createTable || (exports.createTable = createTable = {}));
//# sourceMappingURL=index.js.map