"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceExport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function attendanceExport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...attendanceExport.METADATA,
        template: attendanceExport.METADATA.path,
        path: attendanceExport.path(query),
    });
}
exports.attendanceExport = attendanceExport;
(function (attendanceExport) {
    attendanceExport.METADATA = {
        method: "GET",
        path: "/shop/report/attendance/export",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    attendanceExport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/attendance/export";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(attendanceExport || (exports.attendanceExport = attendanceExport = {}));
//# sourceMappingURL=index.js.map