"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWidgetsConfig = exports.widgetsConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function widgetsConfig(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...widgetsConfig.METADATA,
        template: widgetsConfig.METADATA.path,
        path: widgetsConfig.path(),
    });
}
exports.widgetsConfig = widgetsConfig;
(function (widgetsConfig) {
    widgetsConfig.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/widgets-config",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    widgetsConfig.path = () => "/shop/crm/dashboard/widgets-config";
})(widgetsConfig || (exports.widgetsConfig = widgetsConfig = {}));
async function updateWidgetsConfig(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateWidgetsConfig.METADATA,
        template: updateWidgetsConfig.METADATA.path,
        path: updateWidgetsConfig.path(),
    }, body);
}
exports.updateWidgetsConfig = updateWidgetsConfig;
(function (updateWidgetsConfig) {
    updateWidgetsConfig.METADATA = {
        method: "PATCH",
        path: "/shop/crm/dashboard/widgets-config",
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
    updateWidgetsConfig.path = () => "/shop/crm/dashboard/widgets-config";
})(updateWidgetsConfig || (exports.updateWidgetsConfig = updateWidgetsConfig = {}));
//# sourceMappingURL=index.js.map