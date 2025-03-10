"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestApprove = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function requestApprove(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...requestApprove.METADATA,
        template: requestApprove.METADATA.path,
        path: requestApprove.path(id),
    });
}
exports.requestApprove = requestApprove;
(function (requestApprove) {
    requestApprove.METADATA = {
        method: "PUT",
        path: "/shop/hr/salary/calculations/:id/request-approve",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    requestApprove.path = (id) => `/shop/hr/salary/calculations/${encodeURIComponent(id?.toString() ?? "null")}/request-approve`;
})(requestApprove || (exports.requestApprove = requestApprove = {}));
//# sourceMappingURL=index.js.map