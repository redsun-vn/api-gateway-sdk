"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function activateConfig(connection, id, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...activateConfig.METADATA,
        template: activateConfig.METADATA.path,
        path: activateConfig.path(id),
    }, dto);
}
exports.activateConfig = activateConfig;
(function (activateConfig) {
    activateConfig.METADATA = {
        method: "PUT",
        path: "/admin/sms/config/:id/activate",
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
    activateConfig.path = (id) => `/admin/sms/config/${encodeURIComponent(id?.toString() ?? "null")}/activate`;
})(activateConfig || (exports.activateConfig = activateConfig = {}));
//# sourceMappingURL=index.js.map