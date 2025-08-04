"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$export = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function $export(connection, categoryId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...$export.METADATA,
        template: $export.METADATA.path,
        path: $export.path(categoryId),
    });
}
exports.$export = $export;
(function ($export) {
    $export.METADATA = {
        method: "GET",
        path: "/admin/package-controller/export/:categoryId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    $export.path = (categoryId) => `/admin/package-controller/export/${encodeURIComponent(categoryId?.toString() ?? "null")}`;
})($export || (exports.$export = $export = {}));
//# sourceMappingURL=index.js.map