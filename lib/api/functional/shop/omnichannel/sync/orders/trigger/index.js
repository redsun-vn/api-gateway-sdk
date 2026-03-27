"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerOrderSync = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function triggerOrderSync(connection, opts) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...triggerOrderSync.METADATA,
        template: triggerOrderSync.METADATA.path,
        path: triggerOrderSync.path(),
    }, opts);
}
exports.triggerOrderSync = triggerOrderSync;
(function (triggerOrderSync) {
    triggerOrderSync.METADATA = {
        method: "POST",
        path: "/shop/omnichannel/sync/orders/trigger",
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
    triggerOrderSync.path = () => "/shop/omnichannel/sync/orders/trigger";
})(triggerOrderSync || (exports.triggerOrderSync = triggerOrderSync = {}));
//# sourceMappingURL=index.js.map