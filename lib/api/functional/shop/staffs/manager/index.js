"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateManager = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updateManager(connection, data, id) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateManager.METADATA,
        template: updateManager.METADATA.path,
        path: updateManager.path(id),
    }, data);
}
exports.updateManager = updateManager;
(function (updateManager) {
    updateManager.METADATA = {
        method: "PATCH",
        path: "/shop/staffs/:id/manager",
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
    updateManager.path = (id) => `/shop/staffs/${encodeURIComponent(id?.toString() ?? "null")}/manager`;
})(updateManager || (exports.updateManager = updateManager = {}));
//# sourceMappingURL=index.js.map