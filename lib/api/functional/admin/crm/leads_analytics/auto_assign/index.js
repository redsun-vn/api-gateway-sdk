"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoAssign = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function autoAssign(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...autoAssign.METADATA,
        template: autoAssign.METADATA.path,
        path: autoAssign.path(id),
    });
}
exports.autoAssign = autoAssign;
(function (autoAssign) {
    autoAssign.METADATA = {
        method: "POST",
        path: "/admin/crm/leads-analytics/auto-assign/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    autoAssign.path = (id) => `/admin/crm/leads-analytics/auto-assign/${encodeURIComponent(id?.toString() ?? "null")}`;
})(autoAssign || (exports.autoAssign = autoAssign = {}));
//# sourceMappingURL=index.js.map