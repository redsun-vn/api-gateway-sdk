"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignUser = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function assignUser(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...assignUser.METADATA,
        template: assignUser.METADATA.path,
        path: assignUser.path(),
    }, data);
}
exports.assignUser = assignUser;
(function (assignUser) {
    assignUser.METADATA = {
        method: "POST",
        path: "/admin/crm/leads-analytics/assign-user",
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
    assignUser.path = () => "/admin/crm/leads-analytics/assign-user";
})(assignUser || (exports.assignUser = assignUser = {}));
//# sourceMappingURL=index.js.map