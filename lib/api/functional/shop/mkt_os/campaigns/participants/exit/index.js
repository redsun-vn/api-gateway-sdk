"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exitParticipant = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function exitParticipant(connection, id, participantId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...exitParticipant.METADATA,
        template: exitParticipant.METADATA.path,
        path: exitParticipant.path(id, participantId),
    }, body);
}
exports.exitParticipant = exitParticipant;
(function (exitParticipant) {
    exitParticipant.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/campaigns/:id/participants/:participantId/exit",
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
    exitParticipant.path = (id, participantId) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/participants/${encodeURIComponent(participantId?.toString() ?? "null")}/exit`;
})(exitParticipant || (exports.exitParticipant = exitParticipant = {}));
//# sourceMappingURL=index.js.map