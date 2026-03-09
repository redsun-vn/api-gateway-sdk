"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlerts = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getAlerts(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getAlerts.METADATA,
        template: getAlerts.METADATA.path,
        path: getAlerts.path(query),
    });
}
exports.getAlerts = getAlerts;
(function (getAlerts) {
    getAlerts.METADATA = {
        method: "GET",
        path: "/shop/reservation/dashboard/alerts",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getAlerts.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/reservation/dashboard/alerts";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getAlerts || (exports.getAlerts = getAlerts = {}));
//# sourceMappingURL=index.js.map