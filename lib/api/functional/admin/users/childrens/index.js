"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllChildrens = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getAllChildrens(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getAllChildrens.METADATA,
        template: getAllChildrens.METADATA.path,
        path: getAllChildrens.path(id),
    });
}
exports.getAllChildrens = getAllChildrens;
(function (getAllChildrens) {
    getAllChildrens.METADATA = {
        method: "GET",
        path: "/admin/users/:id/childrens",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getAllChildrens.path = (id) => `/admin/users/${encodeURIComponent(id?.toString() ?? "null")}/childrens`;
})(getAllChildrens || (exports.getAllChildrens = getAllChildrens = {}));
//# sourceMappingURL=index.js.map