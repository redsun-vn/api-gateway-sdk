"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeToken = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function authorizeToken(connection, opts) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...authorizeToken.METADATA,
        template: authorizeToken.METADATA.path,
        path: authorizeToken.path(),
    }, opts);
}
exports.authorizeToken = authorizeToken;
(function (authorizeToken) {
    authorizeToken.METADATA = {
        method: "POST",
        path: "/omnichannel/shop/authorize",
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
    authorizeToken.path = () => "/omnichannel/shop/authorize";
})(authorizeToken || (exports.authorizeToken = authorizeToken = {}));
//# sourceMappingURL=index.js.map