"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItem = exports.createItem = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createItem(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createItem.METADATA,
        template: createItem.METADATA.path,
        path: createItem.path(id),
    }, data);
}
exports.createItem = createItem;
(function (createItem) {
    createItem.METADATA = {
        method: "POST",
        path: "/admin/reconciliations/:id/item",
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
    createItem.path = (id) => `/admin/reconciliations/${encodeURIComponent(id?.toString() ?? "null")}/item`;
})(createItem || (exports.createItem = createItem = {}));
async function removeItem(connection, id, itemId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...removeItem.METADATA,
        template: removeItem.METADATA.path,
        path: removeItem.path(id, itemId),
    });
}
exports.removeItem = removeItem;
(function (removeItem) {
    removeItem.METADATA = {
        method: "DELETE",
        path: "/admin/reconciliations/:id/item/:item_id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    removeItem.path = (id, itemId) => `/admin/reconciliations/${encodeURIComponent(id?.toString() ?? "null")}/item/${encodeURIComponent(itemId?.toString() ?? "null")}`;
})(removeItem || (exports.removeItem = removeItem = {}));
//# sourceMappingURL=index.js.map