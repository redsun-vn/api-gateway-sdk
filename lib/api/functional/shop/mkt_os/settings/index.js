"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettings = exports.getSettings = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getSettings(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getSettings.METADATA,
        template: getSettings.METADATA.path,
        path: getSettings.path(),
    });
}
exports.getSettings = getSettings;
(function (getSettings) {
    getSettings.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/settings",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getSettings.path = () => "/shop/mkt-os/settings";
})(getSettings || (exports.getSettings = getSettings = {}));
async function updateSettings(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateSettings.METADATA,
        template: updateSettings.METADATA.path,
        path: updateSettings.path(),
    }, body);
}
exports.updateSettings = updateSettings;
(function (updateSettings) {
    updateSettings.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/settings",
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
    updateSettings.path = () => "/shop/mkt-os/settings";
})(updateSettings || (exports.updateSettings = updateSettings = {}));
//# sourceMappingURL=index.js.map