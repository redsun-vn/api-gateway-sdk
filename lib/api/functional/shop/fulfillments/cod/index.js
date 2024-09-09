"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCod = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updateCod(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateCod.METADATA,
        template: updateCod.METADATA.path,
        path: updateCod.path(id),
    }, data);
}
exports.updateCod = updateCod;
(function (updateCod) {
    updateCod.METADATA = {
        method: "POST",
        path: "/shop/fulfillments/:id/cod",
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
    updateCod.path = (id) => `/shop/fulfillments/${encodeURIComponent(id?.toString() ?? "null")}/cod`;
})(updateCod || (exports.updateCod = updateCod = {}));
//# sourceMappingURL=index.js.map