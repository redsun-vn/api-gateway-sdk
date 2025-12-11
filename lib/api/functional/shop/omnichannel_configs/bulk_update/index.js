"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkUpdate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function bulkUpdate(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...bulkUpdate.METADATA,
        template: bulkUpdate.METADATA.path,
        path: bulkUpdate.path(),
    }, data);
}
exports.bulkUpdate = bulkUpdate;
(function (bulkUpdate) {
    bulkUpdate.METADATA = {
        method: "POST",
        path: "/shop/omnichannel-configs/bulk-update",
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
    bulkUpdate.path = () => "/shop/omnichannel-configs/bulk-update";
})(bulkUpdate || (exports.bulkUpdate = bulkUpdate = {}));
//# sourceMappingURL=index.js.map