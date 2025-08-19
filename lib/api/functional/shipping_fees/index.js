"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdditionalFee = exports.updateAdditionalFee = exports.createAdditionalFee = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createAdditionalFee(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createAdditionalFee.METADATA,
        template: createAdditionalFee.METADATA.path,
        path: createAdditionalFee.path(),
    }, input);
}
exports.createAdditionalFee = createAdditionalFee;
(function (createAdditionalFee) {
    createAdditionalFee.METADATA = {
        method: "POST",
        path: "/shipping-fees",
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
    createAdditionalFee.path = () => "/shipping-fees";
})(createAdditionalFee || (exports.createAdditionalFee = createAdditionalFee = {}));
async function updateAdditionalFee(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateAdditionalFee.METADATA,
        template: updateAdditionalFee.METADATA.path,
        path: updateAdditionalFee.path(id),
    }, input);
}
exports.updateAdditionalFee = updateAdditionalFee;
(function (updateAdditionalFee) {
    updateAdditionalFee.METADATA = {
        method: "PUT",
        path: "/shipping-fees/:id",
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
    updateAdditionalFee.path = (id) => `/shipping-fees/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateAdditionalFee || (exports.updateAdditionalFee = updateAdditionalFee = {}));
async function deleteAdditionalFee(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteAdditionalFee.METADATA,
        template: deleteAdditionalFee.METADATA.path,
        path: deleteAdditionalFee.path(id),
    });
}
exports.deleteAdditionalFee = deleteAdditionalFee;
(function (deleteAdditionalFee) {
    deleteAdditionalFee.METADATA = {
        method: "DELETE",
        path: "/shipping-fees/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteAdditionalFee.path = (id) => `/shipping-fees/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deleteAdditionalFee || (exports.deleteAdditionalFee = deleteAdditionalFee = {}));
//# sourceMappingURL=index.js.map