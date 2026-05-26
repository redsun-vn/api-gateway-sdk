"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recentActivity = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function recentActivity(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...recentActivity.METADATA,
        template: recentActivity.METADATA.path,
        path: recentActivity.path(query),
    });
}
exports.recentActivity = recentActivity;
(function (recentActivity) {
    recentActivity.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/recent-activity",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    recentActivity.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/recent-activity";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(recentActivity || (exports.recentActivity = recentActivity = {}));
//# sourceMappingURL=index.js.map