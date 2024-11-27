"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableReservationReport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function tableReservationReport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...tableReservationReport.METADATA,
        template: tableReservationReport.METADATA.path,
        path: tableReservationReport.path(query),
    });
}
exports.tableReservationReport = tableReservationReport;
(function (tableReservationReport) {
    tableReservationReport.METADATA = {
        method: "GET",
        path: "/shop/report/table-reservations",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    tableReservationReport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/table-reservations";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(tableReservationReport || (exports.tableReservationReport = tableReservationReport = {}));
//# sourceMappingURL=index.js.map