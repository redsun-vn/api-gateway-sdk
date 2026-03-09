"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function toggleConfig(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...toggleConfig.METADATA,
        template: toggleConfig.METADATA.path,
        path: toggleConfig.path(),
    }, input);
}
exports.toggleConfig = toggleConfig;
(function (toggleConfig) {
    toggleConfig.METADATA = {
        method: "PUT",
        path: "/shop/zalo-oa/config/toggle",
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
    toggleConfig.path = () => "/shop/zalo-oa/config/toggle";
})(toggleConfig || (exports.toggleConfig = toggleConfig = {}));
//# sourceMappingURL=index.js.map