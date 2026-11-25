"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialPostResults = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function socialPostResults(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...socialPostResults.METADATA,
        template: socialPostResults.METADATA.path,
        path: socialPostResults.path(id),
    });
}
exports.socialPostResults = socialPostResults;
(function (socialPostResults) {
    socialPostResults.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/campaigns/:id/social-post-results",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    socialPostResults.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/social-post-results`;
})(socialPostResults || (exports.socialPostResults = socialPostResults = {}));
//# sourceMappingURL=index.js.map