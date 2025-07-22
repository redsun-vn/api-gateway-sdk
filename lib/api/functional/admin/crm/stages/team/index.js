"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByTeam = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findByTeam(connection, teamId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findByTeam.METADATA,
        template: findByTeam.METADATA.path,
        path: findByTeam.path(teamId),
    });
}
exports.findByTeam = findByTeam;
(function (findByTeam) {
    findByTeam.METADATA = {
        method: "GET",
        path: "/admin/crm/stages/team/:teamId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findByTeam.path = (teamId) => `/admin/crm/stages/team/${encodeURIComponent(teamId?.toString() ?? "null")}`;
})(findByTeam || (exports.findByTeam = findByTeam = {}));
//# sourceMappingURL=index.js.map