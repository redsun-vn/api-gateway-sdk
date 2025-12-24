"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookFromTiktokShop = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function webhookFromTiktokShop(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...webhookFromTiktokShop.METADATA,
        template: webhookFromTiktokShop.METADATA.path,
        path: webhookFromTiktokShop.path(),
    });
}
exports.webhookFromTiktokShop = webhookFromTiktokShop;
(function (webhookFromTiktokShop) {
    webhookFromTiktokShop.METADATA = {
        method: "POST",
        path: "/omnichannel/webhook/tiktok-shop",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    webhookFromTiktokShop.path = () => "/omnichannel/webhook/tiktok-shop";
})(webhookFromTiktokShop || (exports.webhookFromTiktokShop = webhookFromTiktokShop = {}));
//# sourceMappingURL=index.js.map