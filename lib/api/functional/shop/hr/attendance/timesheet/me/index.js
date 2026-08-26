"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myTimesheet = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function myTimesheet(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...myTimesheet.METADATA,
        template: myTimesheet.METADATA.path,
        path: myTimesheet.path(),
    }, body);
}
exports.myTimesheet = myTimesheet;
(function (myTimesheet) {
    myTimesheet.METADATA = {
        method: "POST",
        path: "/shop/hr/attendance/timesheet/me",
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
    myTimesheet.path = () => "/shop/hr/attendance/timesheet/me";
})(myTimesheet || (exports.myTimesheet = myTimesheet = {}));
//# sourceMappingURL=index.js.map