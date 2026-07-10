"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignTeam = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function assignTeam(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...assignTeam.METADATA,
        template: assignTeam.METADATA.path,
        path: assignTeam.path(),
    }, body);
}
exports.assignTeam = assignTeam;
(function (assignTeam) {
    assignTeam.METADATA = {
        method: "PUT",
        path: "/shop/crm/leads/team",
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
    assignTeam.path = () => "/shop/crm/leads/team";
})(assignTeam || (exports.assignTeam = assignTeam = {}));
//# sourceMappingURL=index.js.map