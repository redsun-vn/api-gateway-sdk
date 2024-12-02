"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyDomain = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function verifyDomain(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...verifyDomain.METADATA,
        template: verifyDomain.METADATA.path,
        path: verifyDomain.path(id),
    });
}
exports.verifyDomain = verifyDomain;
(function (verifyDomain) {
    verifyDomain.METADATA = {
        method: "POST",
        path: "/shop/cms/websites/verify-domain/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    verifyDomain.path = (id) => `/shop/cms/websites/verify-domain/${encodeURIComponent(id?.toString() ?? "null")}`;
})(verifyDomain || (exports.verifyDomain = verifyDomain = {}));
//# sourceMappingURL=index.js.map