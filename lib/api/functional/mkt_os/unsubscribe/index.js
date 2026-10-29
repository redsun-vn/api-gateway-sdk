"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unsubscribe = exports.confirmPage = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function confirmPage(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...confirmPage.METADATA,
        template: confirmPage.METADATA.path,
        path: confirmPage.path(),
    });
}
exports.confirmPage = confirmPage;
(function (confirmPage) {
    confirmPage.METADATA = {
        method: "GET",
        path: "/mkt-os/unsubscribe",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    confirmPage.path = () => "/mkt-os/unsubscribe";
})(confirmPage || (exports.confirmPage = confirmPage = {}));
async function unsubscribe(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...unsubscribe.METADATA,
        template: unsubscribe.METADATA.path,
        path: unsubscribe.path(),
    });
}
exports.unsubscribe = unsubscribe;
(function (unsubscribe) {
    unsubscribe.METADATA = {
        method: "POST",
        path: "/mkt-os/unsubscribe",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    unsubscribe.path = () => "/mkt-os/unsubscribe";
})(unsubscribe || (exports.unsubscribe = unsubscribe = {}));
//# sourceMappingURL=index.js.map