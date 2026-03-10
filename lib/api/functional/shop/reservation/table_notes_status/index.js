"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStatus = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updateStatus(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateStatus.METADATA,
        template: updateStatus.METADATA.path,
        path: updateStatus.path(id),
    }, data);
}
exports.updateStatus = updateStatus;
(function (updateStatus) {
    updateStatus.METADATA = {
        method: "PATCH",
        path: "/shop/reservation/table_notes_status/:id",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    updateStatus.path = (id) => `/shop/reservation/table_notes_status/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateStatus || (exports.updateStatus = updateStatus = {}));
//# sourceMappingURL=index.js.map