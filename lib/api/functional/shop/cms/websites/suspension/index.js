"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSuspension = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updateSuspension(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateSuspension.METADATA,
        template: updateSuspension.METADATA.path,
        path: updateSuspension.path(id),
    }, data);
}
exports.updateSuspension = updateSuspension;
(function (updateSuspension) {
    updateSuspension.METADATA = {
        method: "PATCH",
        path: "/shop/cms/websites/:id/suspension",
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
    updateSuspension.path = (id) => `/shop/cms/websites/${encodeURIComponent(id?.toString() ?? "null")}/suspension`;
})(updateSuspension || (exports.updateSuspension = updateSuspension = {}));
//# sourceMappingURL=index.js.map