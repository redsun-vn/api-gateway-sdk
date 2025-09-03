"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function upsertConfig(connection, shopId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...upsertConfig.METADATA,
        template: upsertConfig.METADATA.path,
        path: upsertConfig.path(shopId),
    }, data);
}
exports.upsertConfig = upsertConfig;
(function (upsertConfig) {
    upsertConfig.METADATA = {
        method: "POST",
        path: "/shop/e-invoice/:shopId/upsert",
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
    upsertConfig.path = (shopId) => `/shop/e-invoice/${encodeURIComponent(shopId?.toString() ?? "null")}/upsert`;
})(upsertConfig || (exports.upsertConfig = upsertConfig = {}));
//# sourceMappingURL=index.js.map