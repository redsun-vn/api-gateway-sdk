"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateConfig = exports.getConfig = exports.listConfigs = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listConfigs(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listConfigs.METADATA,
        template: listConfigs.METADATA.path,
        path: listConfigs.path(),
    });
}
exports.listConfigs = listConfigs;
(function (listConfigs) {
    listConfigs.METADATA = {
        method: "GET",
        path: "/admin/platform-email/configs",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listConfigs.path = () => "/admin/platform-email/configs";
})(listConfigs || (exports.listConfigs = listConfigs = {}));
async function getConfig(connection, brandCode) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getConfig.METADATA,
        template: getConfig.METADATA.path,
        path: getConfig.path(brandCode),
    });
}
exports.getConfig = getConfig;
(function (getConfig) {
    getConfig.METADATA = {
        method: "GET",
        path: "/admin/platform-email/configs/:brandCode",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getConfig.path = (brandCode) => `/admin/platform-email/configs/${encodeURIComponent(brandCode?.toString() ?? "null")}`;
})(getConfig || (exports.getConfig = getConfig = {}));
async function updateConfig(connection, brandCode, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateConfig.METADATA,
        template: updateConfig.METADATA.path,
        path: updateConfig.path(brandCode),
    }, body);
}
exports.updateConfig = updateConfig;
(function (updateConfig) {
    updateConfig.METADATA = {
        method: "PUT",
        path: "/admin/platform-email/configs/:brandCode",
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
    updateConfig.path = (brandCode) => `/admin/platform-email/configs/${encodeURIComponent(brandCode?.toString() ?? "null")}`;
})(updateConfig || (exports.updateConfig = updateConfig = {}));
//# sourceMappingURL=index.js.map