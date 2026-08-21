"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportTimesheet = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function exportTimesheet(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...exportTimesheet.METADATA,
        template: exportTimesheet.METADATA.path,
        path: exportTimesheet.path(),
    }, body);
}
exports.exportTimesheet = exportTimesheet;
(function (exportTimesheet) {
    exportTimesheet.METADATA = {
        method: "POST",
        path: "/shop/hr/attendance/timesheet/export",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    exportTimesheet.path = () => "/shop/hr/attendance/timesheet/export";
})(exportTimesheet || (exports.exportTimesheet = exportTimesheet = {}));
//# sourceMappingURL=index.js.map