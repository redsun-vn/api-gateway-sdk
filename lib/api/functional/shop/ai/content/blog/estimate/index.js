"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estimateBlog = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function estimateBlog(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...estimateBlog.METADATA,
        template: estimateBlog.METADATA.path,
        path: estimateBlog.path(),
    }, data);
}
exports.estimateBlog = estimateBlog;
(function (estimateBlog) {
    estimateBlog.METADATA = {
        method: "POST",
        path: "/shop/ai/content/blog/estimate",
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
    estimateBlog.path = () => "/shop/ai/content/blog/estimate";
})(estimateBlog || (exports.estimateBlog = estimateBlog = {}));
//# sourceMappingURL=index.js.map