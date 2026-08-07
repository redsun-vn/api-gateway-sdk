"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function activateConfig(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...activateConfig.METADATA,
        template: activateConfig.METADATA.path,
        path: activateConfig.path(id),
    });
}
exports.activateConfig = activateConfig;
(function (activateConfig) {
    activateConfig.METADATA = {
        method: "PUT",
        path: "/shop/sms/config/:id/activate",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    activateConfig.path = (id) => `/shop/sms/config/${encodeURIComponent(id?.toString() ?? "null")}/activate`;
})(activateConfig || (exports.activateConfig = activateConfig = {}));
//# sourceMappingURL=index.js.map