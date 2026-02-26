"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackages = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getPackages(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPackages.METADATA,
        template: getPackages.METADATA.path,
        path: getPackages.path(),
    });
}
exports.getPackages = getPackages;
(function (getPackages) {
    getPackages.METADATA = {
        method: "GET",
        path: "/admin/ai/config/pricing/packages",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPackages.path = () => "/admin/ai/config/pricing/packages";
})(getPackages || (exports.getPackages = getPackages = {}));
//# sourceMappingURL=index.js.map