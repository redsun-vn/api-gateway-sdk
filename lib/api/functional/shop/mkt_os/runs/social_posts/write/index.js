"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeSocialPosts = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function writeSocialPosts(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...writeSocialPosts.METADATA,
        template: writeSocialPosts.METADATA.path,
        path: writeSocialPosts.path(id),
    }, body);
}
exports.writeSocialPosts = writeSocialPosts;
(function (writeSocialPosts) {
    writeSocialPosts.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/runs/:id/social-posts/write",
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
    writeSocialPosts.path = (id) => `/shop/mkt-os/runs/${encodeURIComponent(id?.toString() ?? "null")}/social-posts/write`;
})(writeSocialPosts || (exports.writeSocialPosts = writeSocialPosts = {}));
//# sourceMappingURL=index.js.map