"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.issueShareUrl = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function issueShareUrl(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...issueShareUrl.METADATA,
        template: issueShareUrl.METADATA.path,
        path: issueShareUrl.path(id),
    });
}
exports.issueShareUrl = issueShareUrl;
(function (issueShareUrl) {
    issueShareUrl.METADATA = {
        method: "POST",
        path: "/attachments/shop/issue-share-url/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    issueShareUrl.path = (id) => `/attachments/shop/issue-share-url/${encodeURIComponent(id?.toString() ?? "null")}`;
})(issueShareUrl || (exports.issueShareUrl = issueShareUrl = {}));
//# sourceMappingURL=index.js.map