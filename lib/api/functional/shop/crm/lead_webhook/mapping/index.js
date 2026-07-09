"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertMapping = exports.getMapping = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getMapping(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getMapping.METADATA,
        template: getMapping.METADATA.path,
        path: getMapping.path(),
    });
}
exports.getMapping = getMapping;
(function (getMapping) {
    getMapping.METADATA = {
        method: "GET",
        path: "/shop/crm/lead-webhook/mapping",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getMapping.path = () => "/shop/crm/lead-webhook/mapping";
})(getMapping || (exports.getMapping = getMapping = {}));
async function upsertMapping(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...upsertMapping.METADATA,
        template: upsertMapping.METADATA.path,
        path: upsertMapping.path(),
    }, body);
}
exports.upsertMapping = upsertMapping;
(function (upsertMapping) {
    upsertMapping.METADATA = {
        method: "POST",
        path: "/shop/crm/lead-webhook/mapping",
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
    upsertMapping.path = () => "/shop/crm/lead-webhook/mapping";
})(upsertMapping || (exports.upsertMapping = upsertMapping = {}));
//# sourceMappingURL=index.js.map