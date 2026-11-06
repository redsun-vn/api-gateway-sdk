"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function post(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...post.METADATA,
        template: post.METADATA.path,
        path: post.path(id),
    });
}
exports.post = post;
(function (post) {
    post.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/social/analytics/posts/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    post.path = (id) => `/shop/mkt-os/social/analytics/posts/${encodeURIComponent(id?.toString() ?? "null")}`;
})(post || (exports.post = post = {}));
//# sourceMappingURL=index.js.map