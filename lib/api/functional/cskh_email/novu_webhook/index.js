"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.novuWebhook = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function novuWebhook(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...novuWebhook.METADATA,
        template: novuWebhook.METADATA.path,
        path: novuWebhook.path(),
    });
}
exports.novuWebhook = novuWebhook;
(function (novuWebhook) {
    novuWebhook.METADATA = {
        method: "POST",
        path: "/cskh-email/novu-webhook",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    novuWebhook.path = () => "/cskh-email/novu-webhook";
})(novuWebhook || (exports.novuWebhook = novuWebhook = {}));
//# sourceMappingURL=index.js.map