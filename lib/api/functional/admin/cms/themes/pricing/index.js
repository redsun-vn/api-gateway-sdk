"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPricing = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function setPricing(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...setPricing.METADATA,
        template: setPricing.METADATA.path,
        path: setPricing.path(id),
    }, body);
}
exports.setPricing = setPricing;
(function (setPricing) {
    setPricing.METADATA = {
        method: "PUT",
        path: "/admin/cms/themes/:id/pricing",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    setPricing.path = (id) => `/admin/cms/themes/${encodeURIComponent(id?.toString() ?? "null")}/pricing`;
})(setPricing || (exports.setPricing = setPricing = {}));
//# sourceMappingURL=index.js.map