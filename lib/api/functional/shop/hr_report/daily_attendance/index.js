"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDailyAttendance = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getDailyAttendance(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getDailyAttendance.METADATA,
        template: getDailyAttendance.METADATA.path,
        path: getDailyAttendance.path(query),
    });
}
exports.getDailyAttendance = getDailyAttendance;
(function (getDailyAttendance) {
    getDailyAttendance.METADATA = {
        method: "GET",
        path: "/shop/hr-report/daily-attendance",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getDailyAttendance.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr-report/daily-attendance";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getDailyAttendance || (exports.getDailyAttendance = getDailyAttendance = {}));
//# sourceMappingURL=index.js.map