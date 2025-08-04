"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsStatus = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function analyticsStatus(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...analyticsStatus.METADATA,
        template: analyticsStatus.METADATA.path,
        path: analyticsStatus.path(query),
    });
}
exports.analyticsStatus = analyticsStatus;
(function (analyticsStatus) {
    analyticsStatus.METADATA = {
        method: "GET",
        path: "/admin/crm/leads-analytics/status",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    analyticsStatus.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/crm/leads-analytics/status";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(analyticsStatus || (exports.analyticsStatus = analyticsStatus = {}));
//# sourceMappingURL=index.js.map