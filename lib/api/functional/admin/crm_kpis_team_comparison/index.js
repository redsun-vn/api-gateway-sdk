"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeamComparison = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getTeamComparison(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getTeamComparison.METADATA,
        template: getTeamComparison.METADATA.path,
        path: getTeamComparison.path(query),
    });
}
exports.getTeamComparison = getTeamComparison;
(function (getTeamComparison) {
    getTeamComparison.METADATA = {
        method: "GET",
        path: "/admin/crm-kpis-team-comparison",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getTeamComparison.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/crm-kpis-team-comparison";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getTeamComparison || (exports.getTeamComparison = getTeamComparison = {}));
//# sourceMappingURL=index.js.map