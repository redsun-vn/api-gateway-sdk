"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientToken = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function clientToken(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...clientToken.METADATA,
        template: clientToken.METADATA.path,
        path: clientToken.path(),
    });
}
exports.clientToken = clientToken;
(function (clientToken) {
    clientToken.METADATA = {
        method: "POST",
        path: "/shop/crm/calls/client-token",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    clientToken.path = () => "/shop/crm/calls/client-token";
})(clientToken || (exports.clientToken = clientToken = {}));
//# sourceMappingURL=index.js.map