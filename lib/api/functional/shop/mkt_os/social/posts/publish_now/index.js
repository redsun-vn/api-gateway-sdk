"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishNow = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function publishNow(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...publishNow.METADATA,
        template: publishNow.METADATA.path,
        path: publishNow.path(id),
    });
}
exports.publishNow = publishNow;
(function (publishNow) {
    publishNow.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/posts/:id/publish-now",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    publishNow.path = (id) => `/shop/mkt-os/social/posts/${encodeURIComponent(id?.toString() ?? "null")}/publish-now`;
})(publishNow || (exports.publishNow = publishNow = {}));
//# sourceMappingURL=index.js.map