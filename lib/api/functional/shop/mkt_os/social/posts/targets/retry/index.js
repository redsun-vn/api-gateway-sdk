"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryTarget = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function retryTarget(connection, id, targetId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...retryTarget.METADATA,
        template: retryTarget.METADATA.path,
        path: retryTarget.path(id, targetId),
    }, body);
}
exports.retryTarget = retryTarget;
(function (retryTarget) {
    retryTarget.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/posts/:id/targets/:targetId/retry",
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
    retryTarget.path = (id, targetId) => `/shop/mkt-os/social/posts/${encodeURIComponent(id?.toString() ?? "null")}/targets/${encodeURIComponent(targetId?.toString() ?? "null")}/retry`;
})(retryTarget || (exports.retryTarget = retryTarget = {}));
//# sourceMappingURL=index.js.map