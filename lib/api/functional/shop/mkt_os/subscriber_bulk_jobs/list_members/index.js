"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listMembers = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listMembers(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...listMembers.METADATA,
        template: listMembers.METADATA.path,
        path: listMembers.path(),
    }, body);
}
exports.listMembers = listMembers;
(function (listMembers) {
    listMembers.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/subscriber-bulk-jobs/list-members",
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
    listMembers.path = () => "/shop/mkt-os/subscriber-bulk-jobs/list-members";
})(listMembers || (exports.listMembers = listMembers = {}));
//# sourceMappingURL=index.js.map