"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdditions = exports.createAdditions = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createAdditions(connection, data, id) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createAdditions.METADATA,
        path: createAdditions.path(id),
    }, data);
}
exports.createAdditions = createAdditions;
(function (createAdditions) {
    createAdditions.METADATA = {
        method: "POST",
        path: "/admin/packages/:id/additions",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    createAdditions.path = (id) => `/admin/packages/${encodeURIComponent(id ?? "null")}/additions`;
})(createAdditions || (exports.createAdditions = createAdditions = {}));
async function deleteAdditions(connection, data, id) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...deleteAdditions.METADATA,
        path: deleteAdditions.path(id),
    }, data);
}
exports.deleteAdditions = deleteAdditions;
(function (deleteAdditions) {
    deleteAdditions.METADATA = {
        method: "DELETE",
        path: "/admin/packages/:id/additions",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    deleteAdditions.path = (id) => `/admin/packages/${encodeURIComponent(id ?? "null")}/additions`;
})(deleteAdditions || (exports.deleteAdditions = deleteAdditions = {}));
//# sourceMappingURL=index.js.map