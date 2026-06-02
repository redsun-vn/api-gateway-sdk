"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkUpdate = exports.bulkCreate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function bulkCreate(connection, input) {
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
    }, input);
}
exports.bulkCreate = bulkCreate;
(function (bulkCreate) {
    bulkCreate.METADATA = {
        method: "POST",
        path: "/shop/product/variants/bulk",
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
    bulkCreate.path = () => "/shop/product/variants/bulk";
})(bulkCreate || (exports.bulkCreate = bulkCreate = {}));
async function bulkUpdate(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...bulkUpdate.METADATA,
        template: bulkUpdate.METADATA.path,
        path: bulkUpdate.path(),
    }, input);
}
exports.bulkUpdate = bulkUpdate;
(function (bulkUpdate) {
    bulkUpdate.METADATA = {
        method: "PUT",
        path: "/shop/product/variants/bulk",
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
    bulkUpdate.path = () => "/shop/product/variants/bulk";
})(bulkUpdate || (exports.bulkUpdate = bulkUpdate = {}));
//# sourceMappingURL=index.js.map