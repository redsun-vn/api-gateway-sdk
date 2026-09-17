"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listGroups = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listGroups(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listGroups.METADATA,
        template: listGroups.METADATA.path,
        path: listGroups.path(),
    });
}
exports.listGroups = listGroups;
(function (listGroups) {
    listGroups.METADATA = {
        method: "GET",
        path: "/admin/platform-email/groups",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listGroups.path = () => "/admin/platform-email/groups";
})(listGroups || (exports.listGroups = listGroups = {}));
//# sourceMappingURL=index.js.map