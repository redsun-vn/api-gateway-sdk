"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importBatch = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function importBatch(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...importBatch.METADATA,
        template: importBatch.METADATA.path,
        path: importBatch.path(),
    }, body);
}
exports.importBatch = importBatch;
(function (importBatch) {
    importBatch.METADATA = {
        method: "POST",
        path: "/shop/hr/attendance/details/import-batch",
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
    importBatch.path = () => "/shop/hr/attendance/details/import-batch";
})(importBatch || (exports.importBatch = importBatch = {}));
//# sourceMappingURL=index.js.map