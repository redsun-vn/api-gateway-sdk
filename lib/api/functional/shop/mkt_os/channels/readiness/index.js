"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChannelReadiness = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getChannelReadiness(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getChannelReadiness.METADATA,
        template: getChannelReadiness.METADATA.path,
        path: getChannelReadiness.path(),
    });
}
exports.getChannelReadiness = getChannelReadiness;
(function (getChannelReadiness) {
    getChannelReadiness.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/channels/readiness",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getChannelReadiness.path = () => "/shop/mkt-os/channels/readiness";
})(getChannelReadiness || (exports.getChannelReadiness = getChannelReadiness = {}));
//# sourceMappingURL=index.js.map