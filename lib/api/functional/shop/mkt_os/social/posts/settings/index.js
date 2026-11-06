"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettings = exports.settings = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function settings(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...settings.METADATA,
        template: settings.METADATA.path,
        path: settings.path(),
    });
}
exports.settings = settings;
(function (settings) {
    settings.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/social/posts/settings",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    settings.path = () => "/shop/mkt-os/social/posts/settings";
})(settings || (exports.settings = settings = {}));
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
        path: "/shop/mkt-os/social/posts/settings",
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
    updateSettings.path = () => "/shop/mkt-os/social/posts/settings";
})(updateSettings || (exports.updateSettings = updateSettings = {}));
//# sourceMappingURL=index.js.map