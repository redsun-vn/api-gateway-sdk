"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reassign = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function reassign(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...reassign.METADATA,
        template: reassign.METADATA.path,
        path: reassign.path(id),
    }, body);
}
exports.reassign = reassign;
(function (reassign) {
    reassign.METADATA = {
        method: "POST",
        path: "/shop/crm/conversations/:id/assign",
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
    reassign.path = (id) => `/shop/crm/conversations/${encodeURIComponent(id?.toString() ?? "null")}/assign`;
})(reassign || (exports.reassign = reassign = {}));
//# sourceMappingURL=index.js.map