"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialPosts = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function socialPosts(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...socialPosts.METADATA,
        template: socialPosts.METADATA.path,
        path: socialPosts.path(id),
    });
}
exports.socialPosts = socialPosts;
(function (socialPosts) {
    socialPosts.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/campaigns/:id/social-posts",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    socialPosts.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/social-posts`;
})(socialPosts || (exports.socialPosts = socialPosts = {}));
//# sourceMappingURL=index.js.map