"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createField = exports.fields = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function fields(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...fields.METADATA,
        template: fields.METADATA.path,
        path: fields.path(),
    });
}
exports.fields = fields;
(function (fields) {
    fields.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/subscriber-fields",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    fields.path = () => "/shop/mkt-os/subscriber-fields";
})(fields || (exports.fields = fields = {}));
async function createField(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createField.METADATA,
        template: createField.METADATA.path,
        path: createField.path(),
    }, body);
}
exports.createField = createField;
(function (createField) {
    createField.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/subscriber-fields",
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
    createField.path = () => "/shop/mkt-os/subscriber-fields";
})(createField || (exports.createField = createField = {}));
//# sourceMappingURL=index.js.map