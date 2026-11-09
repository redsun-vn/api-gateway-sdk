"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tiktokCreatorInfo = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function tiktokCreatorInfo(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...tiktokCreatorInfo.METADATA,
        template: tiktokCreatorInfo.METADATA.path,
        path: tiktokCreatorInfo.path(id),
    });
}
exports.tiktokCreatorInfo = tiktokCreatorInfo;
(function (tiktokCreatorInfo) {
    tiktokCreatorInfo.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/social/channels/:id/tiktok/creator-info",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    tiktokCreatorInfo.path = (id) => `/shop/mkt-os/social/channels/${encodeURIComponent(id?.toString() ?? "null")}/tiktok/creator-info`;
})(tiktokCreatorInfo || (exports.tiktokCreatorInfo = tiktokCreatorInfo = {}));
//# sourceMappingURL=index.js.map