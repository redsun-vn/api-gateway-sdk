"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateWebhookToken = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function rotateWebhookToken(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...rotateWebhookToken.METADATA,
        template: rotateWebhookToken.METADATA.path,
        path: rotateWebhookToken.path(),
    });
}
exports.rotateWebhookToken = rotateWebhookToken;
(function (rotateWebhookToken) {
    rotateWebhookToken.METADATA = {
        method: "POST",
        path: "/shop/crm/stringee/webhook-token/rotate",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    rotateWebhookToken.path = () => "/shop/crm/stringee/webhook-token/rotate";
})(rotateWebhookToken || (exports.rotateWebhookToken = rotateWebhookToken = {}));
//# sourceMappingURL=index.js.map