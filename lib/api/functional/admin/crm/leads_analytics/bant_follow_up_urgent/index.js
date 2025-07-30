"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrgentFollowUpLeads = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getUrgentFollowUpLeads(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getUrgentFollowUpLeads.METADATA,
        template: getUrgentFollowUpLeads.METADATA.path,
        path: getUrgentFollowUpLeads.path(query),
    });
}
exports.getUrgentFollowUpLeads = getUrgentFollowUpLeads;
(function (getUrgentFollowUpLeads) {
    getUrgentFollowUpLeads.METADATA = {
        method: "GET",
        path: "/admin/crm/leads-analytics/bant-follow-up-urgent",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getUrgentFollowUpLeads.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/crm/leads-analytics/bant-follow-up-urgent";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getUrgentFollowUpLeads || (exports.getUrgentFollowUpLeads = getUrgentFollowUpLeads = {}));
//# sourceMappingURL=index.js.map