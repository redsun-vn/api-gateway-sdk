"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePermissions = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updatePermissions(connection, data, id) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updatePermissions.METADATA,
        template: updatePermissions.METADATA.path,
        path: updatePermissions.path(id),
    }, data);
}
exports.updatePermissions = updatePermissions;
(function (updatePermissions) {
    updatePermissions.METADATA = {
        method: "PUT",
        path: "/shop/staffs/:id/permissions",
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
    updatePermissions.path = (id) => `/shop/staffs/${encodeURIComponent(id?.toString() ?? "null")}/permissions`;
})(updatePermissions || (exports.updatePermissions = updatePermissions = {}));
//# sourceMappingURL=index.js.map