"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countClick = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function countClick(connection, data, code) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...countClick.METADATA,
        template: countClick.METADATA.path,
        path: countClick.path(code),
    }, data);
}
exports.countClick = countClick;
(function (countClick) {
    countClick.METADATA = {
        method: "PUT",
        path: "/admin/utm-links/:code/count-click",
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
    countClick.path = (code) => `/admin/utm-links/${encodeURIComponent(code?.toString() ?? "null")}/count-click`;
})(countClick || (exports.countClick = countClick = {}));
//# sourceMappingURL=index.js.map