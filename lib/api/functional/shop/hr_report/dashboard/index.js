"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboard = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getDashboard(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getDashboard.METADATA,
        template: getDashboard.METADATA.path,
        path: getDashboard.path(query),
    });
}
exports.getDashboard = getDashboard;
(function (getDashboard) {
    getDashboard.METADATA = {
        method: "GET",
        path: "/shop/hr-report/dashboard",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getDashboard.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr-report/dashboard";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getDashboard || (exports.getDashboard = getDashboard = {}));
//# sourceMappingURL=index.js.map