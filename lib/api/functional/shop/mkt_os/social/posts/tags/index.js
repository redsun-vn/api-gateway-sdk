"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPostTags = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function setPostTags(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...setPostTags.METADATA,
        template: setPostTags.METADATA.path,
        path: setPostTags.path(id),
    }, body);
}
exports.setPostTags = setPostTags;
(function (setPostTags) {
    setPostTags.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/posts/:id/tags",
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
    setPostTags.path = (id) => `/shop/mkt-os/social/posts/${encodeURIComponent(id?.toString() ?? "null")}/tags`;
})(setPostTags || (exports.setPostTags = setPostTags = {}));
//# sourceMappingURL=index.js.map