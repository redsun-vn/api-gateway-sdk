"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function update(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...update.METADATA,
        template: update.METADATA.path,
        path: update.path(id),
    }, body);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PATCH",
        path: "/shop/crm/stages/:id",
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
    update.path = (id) => `/shop/crm/stages/${encodeURIComponent(id?.toString() ?? "null")}`;
})(update || (exports.update = update = {}));
//# sourceMappingURL=index.js.map