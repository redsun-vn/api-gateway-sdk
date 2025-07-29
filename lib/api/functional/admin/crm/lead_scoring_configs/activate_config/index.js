"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function activateConfig(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...activateConfig.METADATA,
        template: activateConfig.METADATA.path,
        path: activateConfig.path(),
    }, data);
}
exports.activateConfig = activateConfig;
(function (activateConfig) {
    activateConfig.METADATA = {
        method: "POST",
        path: "/admin/crm/lead-scoring-configs/activate-config",
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
    activateConfig.path = () => "/admin/crm/lead-scoring-configs/activate-config";
})(activateConfig || (exports.activateConfig = activateConfig = {}));
//# sourceMappingURL=index.js.map