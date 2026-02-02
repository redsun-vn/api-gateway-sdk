"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEntry = exports.createEntry = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createEntry(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createEntry.METADATA,
        template: createEntry.METADATA.path,
        path: createEntry.path(id),
    }, data);
}
exports.createEntry = createEntry;
(function (createEntry) {
    createEntry.METADATA = {
        method: "PUT",
        path: "/admin/system-pricebook/:id/entry",
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
    createEntry.path = (id) => `/admin/system-pricebook/${encodeURIComponent(id?.toString() ?? "null")}/entry`;
})(createEntry || (exports.createEntry = createEntry = {}));
async function updateEntry(connection, id, entryId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateEntry.METADATA,
        template: updateEntry.METADATA.path,
        path: updateEntry.path(id, entryId),
    }, data);
}
exports.updateEntry = updateEntry;
(function (updateEntry) {
    updateEntry.METADATA = {
        method: "PUT",
        path: "/admin/system-pricebook/:id/entry/:entryId",
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
    updateEntry.path = (id, entryId) => `/admin/system-pricebook/${encodeURIComponent(id?.toString() ?? "null")}/entry/${encodeURIComponent(entryId?.toString() ?? "null")}`;
})(updateEntry || (exports.updateEntry = updateEntry = {}));
//# sourceMappingURL=index.js.map