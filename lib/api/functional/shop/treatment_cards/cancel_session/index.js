"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelSession = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function cancelSession(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...cancelSession.METADATA,
        template: cancelSession.METADATA.path,
        path: cancelSession.path(id),
    }, input);
}
exports.cancelSession = cancelSession;
(function (cancelSession) {
    cancelSession.METADATA = {
        method: "POST",
        path: "/shop/treatment-cards/:id/cancel-session",
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
    cancelSession.path = (id) => `/shop/treatment-cards/${encodeURIComponent(id?.toString() ?? "null")}/cancel-session`;
})(cancelSession || (exports.cancelSession = cancelSession = {}));
//# sourceMappingURL=index.js.map