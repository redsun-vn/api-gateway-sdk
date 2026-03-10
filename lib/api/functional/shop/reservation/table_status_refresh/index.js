"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forceRefreshStatuses = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function forceRefreshStatuses(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...forceRefreshStatuses.METADATA,
        template: forceRefreshStatuses.METADATA.path,
        path: forceRefreshStatuses.path(),
    });
}
exports.forceRefreshStatuses = forceRefreshStatuses;
(function (forceRefreshStatuses) {
    forceRefreshStatuses.METADATA = {
        method: "POST",
        path: "/shop/reservation/table_status_refresh",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    forceRefreshStatuses.path = () => "/shop/reservation/table_status_refresh";
})(forceRefreshStatuses || (exports.forceRefreshStatuses = forceRefreshStatuses = {}));
//# sourceMappingURL=index.js.map