"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaffPerformance = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getStaffPerformance(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getStaffPerformance.METADATA,
        template: getStaffPerformance.METADATA.path,
        path: getStaffPerformance.path(query),
    });
}
exports.getStaffPerformance = getStaffPerformance;
(function (getStaffPerformance) {
    getStaffPerformance.METADATA = {
        method: "GET",
        path: "/shop/report/kitchen/staff-performance",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getStaffPerformance.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/kitchen/staff-performance";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getStaffPerformance || (exports.getStaffPerformance = getStaffPerformance = {}));
//# sourceMappingURL=index.js.map