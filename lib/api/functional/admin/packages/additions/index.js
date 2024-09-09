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
        template: createAdditions.METADATA.path,
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
        status: 201,
    };
    createAdditions.path = (id) => `/admin/packages/${encodeURIComponent(id?.toString() ?? "null")}/additions`;
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
        template: deleteAdditions.METADATA.path,
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
        status: 200,
    };
    deleteAdditions.path = (id) => `/admin/packages/${encodeURIComponent(id?.toString() ?? "null")}/additions`;
})(deleteAdditions || (exports.deleteAdditions = deleteAdditions = {}));
//# sourceMappingURL=index.js.map