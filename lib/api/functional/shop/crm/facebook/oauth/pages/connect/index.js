"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectManagedPages = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function connectManagedPages(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...connectManagedPages.METADATA,
        template: connectManagedPages.METADATA.path,
        path: connectManagedPages.path(),
    }, body);
}
exports.connectManagedPages = connectManagedPages;
(function (connectManagedPages) {
    connectManagedPages.METADATA = {
        method: "POST",
        path: "/shop/crm/facebook/oauth/pages/connect",
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
    connectManagedPages.path = () => "/shop/crm/facebook/oauth/pages/connect";
})(connectManagedPages || (exports.connectManagedPages = connectManagedPages = {}));
//# sourceMappingURL=index.js.map