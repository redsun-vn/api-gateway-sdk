"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUnqualified = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function setUnqualified(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...setUnqualified.METADATA,
        template: setUnqualified.METADATA.path,
        path: setUnqualified.path(id),
    }, body);
}
exports.setUnqualified = setUnqualified;
(function (setUnqualified) {
    setUnqualified.METADATA = {
        method: "PUT",
        path: "/shop/crm/leads/:id/unqualified",
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
    setUnqualified.path = (id) => `/shop/crm/leads/${encodeURIComponent(id?.toString() ?? "null")}/unqualified`;
})(setUnqualified || (exports.setUnqualified = setUnqualified = {}));
//# sourceMappingURL=index.js.map