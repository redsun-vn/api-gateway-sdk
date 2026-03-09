"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAppointmentReminder = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendAppointmentReminder(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...sendAppointmentReminder.METADATA,
        template: sendAppointmentReminder.METADATA.path,
        path: sendAppointmentReminder.path(id),
    });
}
exports.sendAppointmentReminder = sendAppointmentReminder;
(function (sendAppointmentReminder) {
    sendAppointmentReminder.METADATA = {
        method: "PUT",
        path: "/shop/appointment-reminder/:id/send",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    sendAppointmentReminder.path = (id) => `/shop/appointment-reminder/${encodeURIComponent(id?.toString() ?? "null")}/send`;
})(sendAppointmentReminder || (exports.sendAppointmentReminder = sendAppointmentReminder = {}));
//# sourceMappingURL=index.js.map