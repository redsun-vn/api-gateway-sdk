"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentReminder = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function cancelAppointmentReminder(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...cancelAppointmentReminder.METADATA,
        template: cancelAppointmentReminder.METADATA.path,
        path: cancelAppointmentReminder.path(id),
    });
}
exports.cancelAppointmentReminder = cancelAppointmentReminder;
(function (cancelAppointmentReminder) {
    cancelAppointmentReminder.METADATA = {
        method: "PUT",
        path: "/shop/appointment-reminder/:id/cancel",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    cancelAppointmentReminder.path = (id) => `/shop/appointment-reminder/${encodeURIComponent(id?.toString() ?? "null")}/cancel`;
})(cancelAppointmentReminder || (exports.cancelAppointmentReminder = cancelAppointmentReminder = {}));
//# sourceMappingURL=index.js.map