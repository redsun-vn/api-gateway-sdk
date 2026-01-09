"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkingHours = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getWorkingHours(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getWorkingHours.METADATA,
        template: getWorkingHours.METADATA.path,
        path: getWorkingHours.path(query),
    });
}
exports.getWorkingHours = getWorkingHours;
(function (getWorkingHours) {
    getWorkingHours.METADATA = {
        method: "GET",
        path: "/shop/hr-report/working-hours",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getWorkingHours.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr-report/working-hours";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getWorkingHours || (exports.getWorkingHours = getWorkingHours = {}));
//# sourceMappingURL=index.js.map