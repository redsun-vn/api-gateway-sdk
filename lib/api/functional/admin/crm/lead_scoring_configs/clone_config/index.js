"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function cloneConfig(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...cloneConfig.METADATA,
        template: cloneConfig.METADATA.path,
        path: cloneConfig.path(),
    }, data);
}
exports.cloneConfig = cloneConfig;
(function (cloneConfig) {
    cloneConfig.METADATA = {
        method: "POST",
        path: "/admin/crm/lead-scoring-configs/clone-config",
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
    cloneConfig.path = () => "/admin/crm/lead-scoring-configs/clone-config";
})(cloneConfig || (exports.cloneConfig = cloneConfig = {}));
//# sourceMappingURL=index.js.map