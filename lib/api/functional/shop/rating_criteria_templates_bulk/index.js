"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkCreate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function bulkCreate(connection, data) {
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
    }, data);
}
exports.bulkCreate = bulkCreate;
(function (bulkCreate) {
    bulkCreate.METADATA = {
        method: "POST",
        path: "/shop/rating-criteria-templates-bulk",
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
    bulkCreate.path = () => "/shop/rating-criteria-templates-bulk";
})(bulkCreate || (exports.bulkCreate = bulkCreate = {}));
//# sourceMappingURL=index.js.map