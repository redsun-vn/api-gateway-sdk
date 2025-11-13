"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleVisibility = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function toggleVisibility(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...toggleVisibility.METADATA,
        template: toggleVisibility.METADATA.path,
        path: toggleVisibility.path(id),
    }, data);
}
exports.toggleVisibility = toggleVisibility;
(function (toggleVisibility) {
    toggleVisibility.METADATA = {
        method: "POST",
        path: "/shop/ratings/:id/toggle-visibility",
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
    toggleVisibility.path = (id) => `/shop/ratings/${encodeURIComponent(id?.toString() ?? "null")}/toggle-visibility`;
})(toggleVisibility || (exports.toggleVisibility = toggleVisibility = {}));
//# sourceMappingURL=index.js.map