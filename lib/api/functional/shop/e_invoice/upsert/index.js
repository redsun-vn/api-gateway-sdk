"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function upsertConfig(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...upsertConfig.METADATA,
        template: upsertConfig.METADATA.path,
        path: upsertConfig.path(),
    }, data);
}
exports.upsertConfig = upsertConfig;
(function (upsertConfig) {
    upsertConfig.METADATA = {
        method: "POST",
        path: "/shop/e-invoice/upsert",
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
    upsertConfig.path = () => "/shop/e-invoice/upsert";
})(upsertConfig || (exports.upsertConfig = upsertConfig = {}));
//# sourceMappingURL=index.js.map