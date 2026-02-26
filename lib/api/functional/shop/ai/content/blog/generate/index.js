"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBlog = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function generateBlog(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...generateBlog.METADATA,
        template: generateBlog.METADATA.path,
        path: generateBlog.path(),
    }, data);
}
exports.generateBlog = generateBlog;
(function (generateBlog) {
    generateBlog.METADATA = {
        method: "POST",
        path: "/shop/ai/content/blog/generate",
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
    generateBlog.path = () => "/shop/ai/content/blog/generate";
})(generateBlog || (exports.generateBlog = generateBlog = {}));
//# sourceMappingURL=index.js.map