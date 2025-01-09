"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccessToke = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getAccessToke(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getAccessToke.METADATA,
        template: getAccessToke.METADATA.path,
        path: getAccessToke.path(id),
    });
}
exports.getAccessToke = getAccessToke;
(function (getAccessToke) {
    getAccessToke.METADATA = {
        method: "GET",
        path: "/shop/tomotek-config/:id/access-token",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getAccessToke.path = (id) => `/shop/tomotek-config/${encodeURIComponent(id?.toString() ?? "null")}/access-token`;
})(getAccessToke || (exports.getAccessToke = getAccessToke = {}));
//# sourceMappingURL=index.js.map