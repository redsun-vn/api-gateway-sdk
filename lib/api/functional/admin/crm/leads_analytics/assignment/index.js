"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsAssignment = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function analyticsAssignment(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...analyticsAssignment.METADATA,
        template: analyticsAssignment.METADATA.path,
        path: analyticsAssignment.path(),
    });
}
exports.analyticsAssignment = analyticsAssignment;
(function (analyticsAssignment) {
    analyticsAssignment.METADATA = {
        method: "GET",
        path: "/admin/crm/leads-analytics/assignment",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    analyticsAssignment.path = () => "/admin/crm/leads-analytics/assignment";
})(analyticsAssignment || (exports.analyticsAssignment = analyticsAssignment = {}));
//# sourceMappingURL=index.js.map