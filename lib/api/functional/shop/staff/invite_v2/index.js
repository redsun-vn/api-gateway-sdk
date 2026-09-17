"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inviteV2 = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function inviteV2(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...inviteV2.METADATA,
        template: inviteV2.METADATA.path,
        path: inviteV2.path(),
    }, input);
}
exports.inviteV2 = inviteV2;
(function (inviteV2) {
    inviteV2.METADATA = {
        method: "POST",
        path: "/shop/staff/invite-v2",
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
    inviteV2.path = () => "/shop/staff/invite-v2";
})(inviteV2 || (exports.inviteV2 = inviteV2 = {}));
//# sourceMappingURL=index.js.map