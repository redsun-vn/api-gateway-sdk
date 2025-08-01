"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeamKPIs = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getTeamKPIs(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getTeamKPIs.METADATA,
        template: getTeamKPIs.METADATA.path,
        path: getTeamKPIs.path(query),
    });
}
exports.getTeamKPIs = getTeamKPIs;
(function (getTeamKPIs) {
    getTeamKPIs.METADATA = {
        method: "GET",
        path: "/admin/crm-kpis-analytics",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getTeamKPIs.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/crm-kpis-analytics";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getTeamKPIs || (exports.getTeamKPIs = getTeamKPIs = {}));
//# sourceMappingURL=index.js.map