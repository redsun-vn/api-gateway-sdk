"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recomputeAll = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function recomputeAll(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...recomputeAll.METADATA,
        template: recomputeAll.METADATA.path,
        path: recomputeAll.path(),
    }, body);
}
exports.recomputeAll = recomputeAll;
(function (recomputeAll) {
    recomputeAll.METADATA = {
        method: "POST",
        path: "/shop/crm/admin/recompute-all",
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
    recomputeAll.path = () => "/shop/crm/admin/recompute-all";
})(recomputeAll || (exports.recomputeAll = recomputeAll = {}));
//# sourceMappingURL=index.js.map