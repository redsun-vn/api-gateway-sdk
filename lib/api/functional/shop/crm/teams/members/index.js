"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMembers = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updateMembers(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateMembers.METADATA,
        template: updateMembers.METADATA.path,
        path: updateMembers.path(),
    }, body);
}
exports.updateMembers = updateMembers;
(function (updateMembers) {
    updateMembers.METADATA = {
        method: "PUT",
        path: "/shop/crm/teams/members",
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
    updateMembers.path = () => "/shop/crm/teams/members";
})(updateMembers || (exports.updateMembers = updateMembers = {}));
//# sourceMappingURL=index.js.map