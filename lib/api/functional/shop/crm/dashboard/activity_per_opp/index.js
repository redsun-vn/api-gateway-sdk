"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activityPerOpp = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function activityPerOpp(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...activityPerOpp.METADATA,
        template: activityPerOpp.METADATA.path,
        path: activityPerOpp.path(query),
    });
}
exports.activityPerOpp = activityPerOpp;
(function (activityPerOpp) {
    activityPerOpp.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/activity-per-opp",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    activityPerOpp.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/activity-per-opp";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(activityPerOpp || (exports.activityPerOpp = activityPerOpp = {}));
//# sourceMappingURL=index.js.map