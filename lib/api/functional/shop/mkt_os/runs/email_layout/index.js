"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRunLayout = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function setRunLayout(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...setRunLayout.METADATA,
        template: setRunLayout.METADATA.path,
        path: setRunLayout.path(id),
    }, body);
}
exports.setRunLayout = setRunLayout;
(function (setRunLayout) {
    setRunLayout.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/runs/:id/email-layout",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    setRunLayout.path = (id) => `/shop/mkt-os/runs/${encodeURIComponent(id?.toString() ?? "null")}/email-layout`;
})(setRunLayout || (exports.setRunLayout = setRunLayout = {}));
//# sourceMappingURL=index.js.map