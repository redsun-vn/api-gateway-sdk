"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntitlement = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getEntitlement(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getEntitlement.METADATA,
        template: getEntitlement.METADATA.path,
        path: getEntitlement.path(),
    });
}
exports.getEntitlement = getEntitlement;
(function (getEntitlement) {
    getEntitlement.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/entitlement",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getEntitlement.path = () => "/shop/mkt-os/entitlement";
})(getEntitlement || (exports.getEntitlement = getEntitlement = {}));
//# sourceMappingURL=index.js.map