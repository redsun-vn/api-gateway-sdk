"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preview = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function preview(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...preview.METADATA,
        template: preview.METADATA.path,
        path: preview.path(id),
    }, body);
}
exports.preview = preview;
(function (preview) {
    preview.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/runs/:id/email/preview",
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
    preview.path = (id) => `/shop/mkt-os/runs/${encodeURIComponent(id?.toString() ?? "null")}/email/preview`;
})(preview || (exports.preview = preview = {}));
//# sourceMappingURL=index.js.map