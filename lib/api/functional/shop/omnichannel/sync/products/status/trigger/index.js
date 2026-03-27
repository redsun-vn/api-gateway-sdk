"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerProductStatusSync = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function triggerProductStatusSync(connection, opts) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...triggerProductStatusSync.METADATA,
        template: triggerProductStatusSync.METADATA.path,
        path: triggerProductStatusSync.path(),
    }, opts);
}
exports.triggerProductStatusSync = triggerProductStatusSync;
(function (triggerProductStatusSync) {
    triggerProductStatusSync.METADATA = {
        method: "POST",
        path: "/shop/omnichannel/sync/products/status/trigger",
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
    triggerProductStatusSync.path = () => "/shop/omnichannel/sync/products/status/trigger";
})(triggerProductStatusSync || (exports.triggerProductStatusSync = triggerProductStatusSync = {}));
//# sourceMappingURL=index.js.map