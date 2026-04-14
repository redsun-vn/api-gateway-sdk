"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkCreate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function bulkCreate(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...bulkCreate.METADATA,
        template: bulkCreate.METADATA.path,
        path: bulkCreate.path(),
    }, body);
}
exports.bulkCreate = bulkCreate;
(function (bulkCreate) {
    bulkCreate.METADATA = {
        method: "POST",
        path: "/shop/omnichannel/orders/mapping/bulk-create",
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
    bulkCreate.path = () => "/shop/omnichannel/orders/mapping/bulk-create";
})(bulkCreate || (exports.bulkCreate = bulkCreate = {}));
//# sourceMappingURL=index.js.map