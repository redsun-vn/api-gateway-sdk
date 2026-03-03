"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertVariantConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function upsertVariantConfig(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...upsertVariantConfig.METADATA,
        template: upsertVariantConfig.METADATA.path,
        path: upsertVariantConfig.path(),
    }, input);
}
exports.upsertVariantConfig = upsertVariantConfig;
(function (upsertVariantConfig) {
    upsertVariantConfig.METADATA = {
        method: "PUT",
        path: "/shop/treatment-configs/variant-config",
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
    upsertVariantConfig.path = () => "/shop/treatment-configs/variant-config";
})(upsertVariantConfig || (exports.upsertVariantConfig = upsertVariantConfig = {}));
//# sourceMappingURL=index.js.map