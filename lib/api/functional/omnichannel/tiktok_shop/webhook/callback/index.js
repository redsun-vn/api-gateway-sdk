"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookCallbackFromTiktokShop = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function webhookCallbackFromTiktokShop(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...webhookCallbackFromTiktokShop.METADATA,
        template: webhookCallbackFromTiktokShop.METADATA.path,
        path: webhookCallbackFromTiktokShop.path(),
    });
}
exports.webhookCallbackFromTiktokShop = webhookCallbackFromTiktokShop;
(function (webhookCallbackFromTiktokShop) {
    webhookCallbackFromTiktokShop.METADATA = {
        method: "POST",
        path: "/omnichannel/tiktok-shop/webhook/callback",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    webhookCallbackFromTiktokShop.path = () => "/omnichannel/tiktok-shop/webhook/callback";
})(webhookCallbackFromTiktokShop || (exports.webhookCallbackFromTiktokShop = webhookCallbackFromTiktokShop = {}));
//# sourceMappingURL=index.js.map