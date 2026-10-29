"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordMarketing = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function recordMarketing(connection, type, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...recordMarketing.METADATA,
        template: recordMarketing.METADATA.path,
        path: recordMarketing.path(type, id),
    });
}
exports.recordMarketing = recordMarketing;
(function (recordMarketing) {
    recordMarketing.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/records/:type/:id/marketing",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    recordMarketing.path = (type, id) => `/shop/mkt-os/records/${encodeURIComponent(type?.toString() ?? "null")}/${encodeURIComponent(id?.toString() ?? "null")}/marketing`;
})(recordMarketing || (exports.recordMarketing = recordMarketing = {}));
//# sourceMappingURL=index.js.map