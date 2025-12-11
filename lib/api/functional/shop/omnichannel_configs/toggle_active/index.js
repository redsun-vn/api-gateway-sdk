"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleActive = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function toggleActive(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...toggleActive.METADATA,
        template: toggleActive.METADATA.path,
        path: toggleActive.path(id),
    }, data);
}
exports.toggleActive = toggleActive;
(function (toggleActive) {
    toggleActive.METADATA = {
        method: "POST",
        path: "/shop/omnichannel-configs/:id/toggle-active",
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
    toggleActive.path = (id) => `/shop/omnichannel-configs/${encodeURIComponent(id?.toString() ?? "null")}/toggle-active`;
})(toggleActive || (exports.toggleActive = toggleActive = {}));
//# sourceMappingURL=index.js.map