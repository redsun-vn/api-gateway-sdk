"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDailySnapshot = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function buildDailySnapshot(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...buildDailySnapshot.METADATA,
        template: buildDailySnapshot.METADATA.path,
        path: buildDailySnapshot.path(),
    }, input);
}
exports.buildDailySnapshot = buildDailySnapshot;
(function (buildDailySnapshot) {
    buildDailySnapshot.METADATA = {
        method: "POST",
        path: "/shop/inventory/report/daily-snapshot/build",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    buildDailySnapshot.path = () => "/shop/inventory/report/daily-snapshot/build";
})(buildDailySnapshot || (exports.buildDailySnapshot = buildDailySnapshot = {}));
//# sourceMappingURL=index.js.map