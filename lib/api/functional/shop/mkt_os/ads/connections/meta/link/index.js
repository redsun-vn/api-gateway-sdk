"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaLink = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function metaLink(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...metaLink.METADATA,
        template: metaLink.METADATA.path,
        path: metaLink.path(),
    });
}
exports.metaLink = metaLink;
(function (metaLink) {
    metaLink.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/ads/connections/meta/link",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    metaLink.path = () => "/shop/mkt-os/ads/connections/meta/link";
})(metaLink || (exports.metaLink = metaLink = {}));
//# sourceMappingURL=index.js.map