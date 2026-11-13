"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostingTimes = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updatePostingTimes(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updatePostingTimes.METADATA,
        template: updatePostingTimes.METADATA.path,
        path: updatePostingTimes.path(id),
    }, body);
}
exports.updatePostingTimes = updatePostingTimes;
(function (updatePostingTimes) {
    updatePostingTimes.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/channels/:id/posting-times",
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
    updatePostingTimes.path = (id) => `/shop/mkt-os/social/channels/${encodeURIComponent(id?.toString() ?? "null")}/posting-times`;
})(updatePostingTimes || (exports.updatePostingTimes = updatePostingTimes = {}));
//# sourceMappingURL=index.js.map