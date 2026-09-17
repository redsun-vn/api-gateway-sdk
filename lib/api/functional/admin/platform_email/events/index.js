"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEvents = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listEvents(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listEvents.METADATA,
        template: listEvents.METADATA.path,
        path: listEvents.path(),
    });
}
exports.listEvents = listEvents;
(function (listEvents) {
    listEvents.METADATA = {
        method: "GET",
        path: "/admin/platform-email/events",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listEvents.path = () => "/admin/platform-email/events";
})(listEvents || (exports.listEvents = listEvents = {}));
//# sourceMappingURL=index.js.map